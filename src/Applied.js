import { db } from "./firebase";
import { onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { query } from "firebase/firestore";
import { where } from "firebase/firestore";
import { useHistory, useParams } from "react-router";
import useFetch from './useFetch';
import { useState } from "react";

const Applied = () => {

    const {id} = useParams();
    const {data:job,isPending,error}= useFetch('http://localhost:8000/jobs/'+id);
    const [temp,setTemp]=useState("");
    var [stu,setStu]=useState([]);

    const jobCollectionRef=collection(db,"jobs");
    const studentCollectionRef=collection(db,"students");

    const handlePage=()=>{

        const q=query(jobCollectionRef, where("title","==",job.title));
        onSnapshot(q, (snapshot) => {
                snapshot.docs.forEach((doc)=>{
                    console.log(doc.data().students);
                    setStu(doc.data().students);
                })
            }
        )
    }
    
    const handleRoll=(roll)=>{

        console.log(roll)
        const q=query(studentCollectionRef, where("roll","==",roll));
        onSnapshot(q, (snapshot) => {
                snapshot.docs.forEach((doc)=>{
                    console.log(doc.data());
                })
            }
        )
    }

    return ( 
        <div className="blog-details">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {job && (
            <>
                <h1>Students that registered for {job.title} are:</h1>
                {handlePage()}
            </>
        )}
        {stu.map((roll)=>(
                    <div className="blog-preview" key={roll}>
                        {roll}
                        {/* {handleRoll(roll)} */}
                    </div>
                ))}
        </div>
     );
}
 
export default Applied;