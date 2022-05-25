import { useState } from "react";
import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";
import { db } from "./firebase";
import { onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { query } from "firebase/firestore";
import { where } from "firebase/firestore";
import StudentDataService from "../src/context/studentservices";

const Edit = () => {
    const {id}=useParams();
    const {data:student,isPending,error}= useFetch('http://localhost:5000/students/'+id);
    const [roll,setRoll] = useState('');
    const [dept,setDept] = useState('');
    const [name,setName] = useState('');
    const [gender,setGender] = useState('');
    const [email,setEmail] = useState('');
    const [contact,setContact] = useState('');
    const [father,setFather] = useState('');
    const [dob,setDob] = useState('');
    const [parentco,setParentco] = useState('');
    const [address,setAddress] = useState('');
    const [tenpercent,setTenpercent] = useState('');
    const [tenthyear,setTenthyear] = useState('');
    const [tenthboard,setTenthboard] = useState('');
    const [twelfthpercent,setTwelfthpercent] = useState('');
    const [twelfthyear,setTwelfthyear] = useState('');
    const [twelfthboard,setTwelfthboard] = useState('');
    const [btechfirst,setBtechfirst] = useState('');
    const [btechsecond,setBtechsecond] = useState('');
    const [btechfifth,setBtechfifth] = useState('');
    const [btechsixth,setBtechsixth] = useState('');
    const [btechthird,setBtechthird] = useState('');
    const [btech,setBtech] = useState('');
    const [gap,setGap] = useState('');
    const [backlog,setBacklog] = useState('');
    const [placed,setPlaced] = useState(''); 
    const [company,setCompany] = useState('');
    const [domain,setDomain] = useState('');
    const [ctc,setCtc] = useState('');
    const [isLoading,setIsLoading]= useState(false);
    const history= useHistory();

    const studentCollectionRef=collection(db,"students");

    const handleEditor=(e)=>{
        e.preventDefault();

        const student={roll,dept,name,gender,email,contact,father,dob,parentco,address,tenpercent,tenthyear,tenthboard,twelfthpercent,twelfthyear,twelfthboard,btechfirst,btechsecond,btechfifth,btechsixth,btechthird,btech,gap,backlog,placed,company,domain,ctc};

        setIsLoading(true);

        const q=query(studentCollectionRef, where("roll","==",student.roll));
        onSnapshot(q, (snapshot) => {
                snapshot.docs.forEach((doc)=>{
                    StudentDataService.updateStudent(doc.id,student);
                })
            }
        )
        
        fetch('http://localhost:5000/students/'+id,{
            method:'PATCH',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(student)
        }).then(()=>{
            setIsLoading(false);
            history.push('/students/'+id);
        })
    }


    return (
        <div className="edit">
        <div className="create">
        <h1>Editor</h1>
        {student && (  
            <form onSubmit={handleEditor}> 
            <label>Name:</label>
            <input
            type="text"
            cols="30"
            rows="10"
            required
            defaultValue={student.name}
            onInput={(e)=>{setName(e.target.value)}}
            />
            <label>Roll Number:</label>
            <input 
            type="text"
            required 
            value={student.roll}
            onChange={(e)=>setRoll(e.target.value)}
            />
            <label>Department:</label>
            <input 
            type="text"
            required 
            defaultValue={student.dept}
            onChange={(e)=>setDept(e.target.value)}
            />
            <label>Gender:</label>
            <input 
            type="text"
            required 
            defaultValue={student.gender}
            onChange={(e)=>setGender(e.target.value)}
            />
            <label>Email Id:</label>
            <input 
            type="text"
            required 
            defaultValue={student.email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <label>Contact Number:</label>
            <input 
            type="text"
            required 
            defaultValue={student.contact}
            onChange={(e)=>setContact(e.target.value)}
            />
            <label>Father's Name:</label>
            <input 
            type="text"
            required 
            defaultValue={student.father}
            onChange={(e)=>setFather(e.target.value)}
            />
            <label>Date of Birth:</label>
            <input 
            type="date"
            required 
            defaultValue={student.dob}
            onChange={(e)=>setDob(e.target.value)}
            />
            <label>Parent's Contact Number:</label>
            <input 
            type="text"
            required 
            defaultValue={student.parentco}
            onChange={(e)=>setParentco(e.target.value)}
            />
            <label>Permanent Address:</label>
            <textarea
            cols="30"
            rows="5"
            required
            defaultValue={student.address}
            onChange={(e)=>setAddress(e.target.value)}
            ></textarea>
            <label>Tenth Percentage:</label>
            <input 
            type="text"
            required 
            defaultValue={student.tenpercent}
            onChange={(e)=>setTenpercent(e.target.value)}
            />
            <label>Tenth Year:</label>
            <input 
            type="text"
            required 
            defaultValue={student.tenthyear}
            onChange={(e)=>setTenthyear(e.target.value)}
            />
            <label>Tenth Board:</label>
            <input 
            type="text"
            required 
            defaultValue={student.tenthboard}
            onChange={(e)=>setTenthboard(e.target.value)}
            />
            <label>Twelfth Percentage:</label>
            <input 
            type="text"
            required 
            defaultValue={student.twelfthpercent}
            onChange={(e)=>setTwelfthpercent(e.target.value)}
            />
            <label>Twelfth Year:</label>
            <input 
            type="text"
            required 
            defaultValue={student.twelfthyear}
            onChange={(e)=>setTwelfthyear(e.target.value)}
            />
            <label>Twelfth Board:</label>
            <input 
            type="text"
            required 
            defaultValue={student.twelfthboard}
            onChange={(e)=>setTwelfthboard(e.target.value)}
            />
            <label>B.Tech 1st Year Percentage:</label>
            <input 
            type="text"
            required 
            defaultValue={student.btechfirst}
            onChange={(e)=>setBtechfirst(e.target.value)}
            />
            <label>B.Tech 2nd Year Percentage:</label>
            <input 
            type="text"
            required 
            defaultValue={student.btechsecond}
            onChange={(e)=>setBtechsecond(e.target.value)}
            />
            <label>B.Tech 5th Semester Percentage:</label>
            <input 
            type="text"
            required 
            defaultValue={student.btechfifth}
            onChange={(e)=>setBtechfifth(e.target.value)}
            />
            <label>B.Tech 6th Semester Percentage:</label>
            <input 
            type="text"
            required 
            defaultValue={student.btechsixth}
            onChange={(e)=>setBtechsixth(e.target.value)}
            />
            <label>B.Tech 3rd Year Percentage:</label>
            <input 
            type="text"
            required 
            defaultValue={student.btechthird}
            onChange={(e)=>setBtechthird(e.target.value)}
            />
            <label>Overall B.Tech Percentage:</label>
            <input 
            type="text"
            required 
            defaultValue={student.btech}
            onChange={(e)=>setBtech(e.target.value)}
            />
            <label>Year Gap in education:</label>
            <input 
            type="text"
            required 
            defaultValue={student.gap}
            onChange={(e)=>setGap(e.target.value)}
            />
            <label>Backlogs:</label>
            <input 
            type="text"
            required 
            defaultValue={student.backlog}
            onChange={(e)=>setBacklog(e.target.value)}
            />
            <label>Are you placed?</label>
            <input 
            type="text"
            required 
            defaultValue={student.placed}
            onChange={(e)=>setPlaced(e.target.value)}
            />
            <br /> <hr /><br />
            <i>
                <h1 style={{
                    textDecoration: "underline"
                }}>Fill only if Placed!</h1>
            </i>
            <label>Company:</label>
            <input 
            type="text" 
            defaultValue={student.company}
            onChange={(e)=>setCompany(e.target.value)}
            />
            <label>Domain/Job Role:</label>
            <input 
            type="text" 
            defaultValue={student.domain}
            onChange={(e)=>setDomain(e.target.value)}
            />
            <label>CTC:</label>
            <input 
            type="text" 
            defaultValue={student.ctc}
            onChange={(e)=>setCtc(e.target.value)}
            />
            <br /><hr /><br />
            {!isLoading && <button>Update Student</button>}
            {isLoading && <button>Updating..</button>}
        </form>
        )}
    </div>
    </div>
    )
}
 
export default Edit;