import { useHistory, useParams } from "react-router";
import useFetch from './useFetch';
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { query } from "firebase/firestore";
import { where } from "firebase/firestore";
import { useState } from "react";
import { arrayUnion } from "firebase/firestore";
import JobDataService from "../src/context/jobservices";


const jobCollectionRef=collection(db,"jobs");
const studentCollectionRef=collection(db,"students");

const Register = () => {
    const {id} = useParams();
    const {data:job,isPending,error}= useFetch('http://localhost:8000/jobs/'+id);
    const [roll,setRoll] = useState("");
    const [message,setMessage]= useState({error:false,msg:""});
    const [bool,setBool]=useState(true);
    const history=useHistory();
    const [temp,setTemp]=useState(0);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setMessage("");
        if(roll==="")
        {
            setMessage({error:true,msg:"All fields are mandatory!"});
            alert(message.msg);
            return;
        }
        const sq=query(studentCollectionRef,where("roll","==",roll));
        onSnapshot(sq,(snapshot)=>{
            snapshot.docs.forEach(async (stu)=>{
                const docRef=doc(db,"students",stu.id);
                const docSnap=await getDoc(docRef);
                if(docSnap.exists())
                {
                    setBool(true);
                    setTemp(1);
                }                
            });
        });
        if(bool===true)
        {
            onSnapshot(sq,(snapshot)=>{
                snapshot.docs.forEach((stu)=>{
                    if(stu.data().placed!="yes" && stu.data().placed!="Yes" && stu.data().placed!="YES")
                    {
                        const q=query(jobCollectionRef, where("title","==",job.title));
                        onSnapshot(q, (snapshot) => {
                                snapshot.docs.forEach((doc)=>{
                                    JobDataService.updateJob(doc.id,{
                                        students: arrayUnion(roll)
                                    });
                                })
                            }
                        )
                        history.push("/home");   
                    }
                    else
                    {
                        const q=query(jobCollectionRef, where("title","==",job.title));
                        onSnapshot(q, (snapshot) => {
                                snapshot.docs.forEach((doc)=>{
                                    const ctc=(doc.data().ctc);
                                    const stuctc=2*(stu.data().ctc);
                                    if(stuctc<=ctc)
                                    {
                                        JobDataService.updateJob(doc.id,{
                                            students: arrayUnion(roll)
                                        });
                                        history.push("/home");
                                    }
                                    else
                                    {
                                        alert("You are not eligible");
                                    }
                                })
                            }
                        )
                    }
                })
            })
            return;
        }
       return console.log("register");
    }
    
    return (         
        <div className="register">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {job && (
                <article>
                    <h1>Registering for {job.title}</h1>
                    <br />
                </article>)
        }
        <form> 
                <label>Roll Number:</label>
                <input 
                type="text"
                required 
                value={roll}
                onChange={(e)=>setRoll(e.target.value)}
                />
                <button onClick={handleSubmit}>Apply</button>
        </form>
        </div>
    );
}
 
export default Register;