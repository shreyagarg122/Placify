import { useHistory, useParams } from "react-router";
import useFetch from './useFetch';
import JobDataService from "../src/context/jobservices";
import { db } from "./firebase";
import { onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { query } from "firebase/firestore";
import { where } from "firebase/firestore";
import { useState } from "react";
import StudentList from './StudentList';

const BlogDetails = () => {
    const {id} = useParams();
    const {data:job,isPending,error}= useFetch('http://localhost:8000/jobs/'+id);
    const {data:students}= useFetch('http://localhost:5000/students');
    const history= useHistory();
    const d= new Date().toISOString().slice(0, 10);
    var [stu,setStu]=useState([]);
    const [show,setShow]=useState("none");

    const jobCollectionRef=collection(db,"jobs");
    // console.log(jobCollectionRef)

    const handleClick=()=>{

        fetch('http://localhost:8000/jobs/'+job.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/home');
        })
    }

    const handleApply=()=>{
        if(d<=job.date)
        {  
            history.push('/register/'+job.id);
        }
        else
        {
            alert("You can not apply now");
        }
    }

    const handleStudents=()=>{

        const ref=collection(db, "jobs","title", job.title);
        console.log(ref);

        if(show=="none")
            setShow((!show));
        else
            setShow("none");

        const q=query(jobCollectionRef, where("title","==",job.title));
        onSnapshot(q, (snapshot) => {
                snapshot.docs.forEach((doc)=>{
                    console.log(doc.data().students);
                    setStu(doc.data().students);
                })
            }
        )
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {job && (
                <article>
                    <h2>{job.title}</h2>
                    <div>
                        <h4>Details:</h4>
                        {job.body}
                    </div>
                    <h5>CTC: {job.ctc}</h5>
                    <br />
                    <a href={job.apply}>Want to apply directly? Click Here!</a>
                    <br /><br />
                    <h5>Posted By: {job.author}</h5>
                    {/* <h5>{job.apply}</h5> */}
                    <br />
                    <button onClick={handleApply}>Apply</button>
                    <button onClick={handleClick}>Delete</button>
                    {/* <button onClick={handleStudents}>Students</button> */}
                    <div style={{display: show}}>
                        { error && <div>{error}</div>}
                        {isPending && <div>Loading....</div>}
                        {students && <StudentList students={students.filter((student)=>{
                            stu.map((roll)=>(
                                (student.roll===roll)
                            ))
                        })} name="Students:"  />}
                    </div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;