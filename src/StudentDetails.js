import { useHistory, useParams } from "react-router";
import useFetch from './useFetch';
import { db } from "./firebase";
import { onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { query } from "firebase/firestore";
import { where } from "firebase/firestore";
import StudentDataService from "../src/context/studentservices";
import { useState } from "react";


const studentCollectionRef=collection(db,"students");

const StudentDetails = () => {
    const {id} = useParams();
    const {data:student,isPending,error}= useFetch('http://localhost:5000/students/'+id);
    const history= useHistory();
    const [show,setShow]=useState("none");

    const handleClick=()=>{

        const q=query(studentCollectionRef, where("roll","==",student.roll));
        onSnapshot(q, (snapshot) => {
                snapshot.docs.forEach((doc)=>{
                    StudentDataService.deleteStudent(doc.id);
                })
            }
        )

        fetch('http://localhost:5000/students/'+student.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/studentshome');
        })
    }
    const handleEdit=()=>{
        history.push('/edit/'+student.id);
    }


    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {student && (
                <article>
                    <h2>Name: {student.name}</h2>
                    <h2>Roll number: {student.roll}</h2>
                    <h2>Department: {student.dept}</h2>
                    <h2>Gender: {student.gender}</h2>
                    <h2>Email Id: {student.email}</h2>
                    <h2>Contact Number: {student.contact}</h2>
                    <h2>Father's Name: {student.father}</h2>
                    <h2>Date of Birth: {student.dob}</h2>
                    <h2>Parent's Contact Number: {student.parentco}</h2>
                    <h2 style={{
                        // whiteSpace: 'pre-wrap'
                    }}>Permanent Address: {student.address}</h2>
                    <h2>Tenth Percentage: {student.tenpercent}</h2>
                    <h2>Tenth Year: {student.tenthyear}</h2>
                    <h2>Tenth Board: {student.tenthboard}</h2>
                    <h2>Twelfth Percentage: {student.twelfthpercent}</h2>
                    <h2>Twelfth Year: {student.twelfthyear}</h2>
                    <h2>Twelfth Board: {student.twelfthboard}</h2>
                    <h2>B.Tech 1st Year Percentage: {student.btechfirst}</h2>
                    <h2>B.Tech 2nd Year Percentage: {student.btechsecond}</h2>
                    <h2>B.Tech 5th Semester Percentage: {student.btechfifth}</h2>
                    <h2>B.Tech 6th Semester Percentage: {student.btechsixth}</h2>
                    <h2>B.Tech 3rd Year Percentage: {student.btechthird}</h2>
                    <h2>Overall B.Tech Percentage: {student.btech}</h2>
                    <h2>Year Gap in education: {student.gap}</h2>
                    <h2>Backlogs: {student.backlog}</h2>
                    <h2>Placed: {student.placed}</h2>
                    {/* <h2>{student.resume}</h2> */}
                    <br />
                    <button onClick={()=>{
                        if(student.placed=="yes" || student.placed=="Yes" || student.placed=="YES")
                        {
                            if(show=="none")
                                setShow((!show));
                            else
                                setShow("none");
                            console.log("clicked");
                        }
                        else
                        {
                            alert("The student is not placed yet!")
                        }
                    }}>Offers in Hand</button>
                    <div style={{display:show}}>
                        <h2>Company: {student.company}</h2>
                        <h2>Domain/Job Role: {student.domain}</h2>
                        <h2>CTC: {student.ctc}</h2>
                    </div>
                    <button onClick={handleClick}>Delete</button>
                    <button onClick={handleEdit}>Edit</button>
                </article>
            )}
        </div>
     );
}
 
export default StudentDetails;