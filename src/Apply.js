import { useState } from "react";
import { useHistory } from "react-router";
import StudentDataService from "../src/context/studentservices";

const Apply = () => {
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
    const [diplomapercent,setDiplomapercent] = useState('');
    const [diplomayear,setDiplomayear] = useState('');
    const [diplomaboard,setDiplomaboard] = useState('');
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
    const [resume,setResume] = useState(null);
    const [isPending,setIsPending]= useState(false);
    const [message,setMessage]= useState({error:false,msg:""});
    const history = useHistory();

    const handleSubmit= async (e)=>{
        e.preventDefault();
        setMessage("");
        if(name==="" || roll===""|| dept==="")
        {
            setMessage({error:true,msg:"All fields are mandatory!"});
            return;
        }
        const student={roll,dept,name,gender,email,contact,father,dob,parentco,address,tenpercent,tenthyear,tenthboard,twelfthpercent,twelfthyear,twelfthboard,diplomapercent,diplomayear,diplomaboard,btechfirst,btechsecond,btechfifth,btechsixth,btechthird,btech,gap,backlog,placed,company,domain,ctc,resume};
        
        setIsPending(true);

        try{
            await StudentDataService.addStudents(student);
            setMessage({error:false, msg:""});
            history.push('/homestudents');
        }
        catch(err) {
            setMessage({error:true,msg:err.message});
        }

        fetch('http://localhost:5000/students',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(student)
        }).then(()=>{
            setIsPending(false);
            // history.go(-1);
            history.push('/homestudents');
        });
    }

    return ( 
        <div className="create">
            <h1>Register Student</h1>
            <br />
            <form onSubmit={handleSubmit}> 
                <label>Roll Number:</label>
                <input 
                type="text"
                required 
                value={roll}
                onChange={(e)=>setRoll(e.target.value)}
                />
                <label>Department:</label>
                <input 
                type="text"
                required 
                value={dept}
                onChange={(e)=>setDept(e.target.value)}
                />
                <label>Name:</label>
                <input
                type="text"
                required
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <label>Gender:</label>
                <input 
                type="text"
                required 
                value={gender}
                onChange={(e)=>setGender(e.target.value)}
                />
                <label>Email Id:</label>
                <input 
                type="text"
                required 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <label>Contact Number:</label>
                <input 
                type="text"
                required 
                value={contact}
                onChange={(e)=>setContact(e.target.value)}
                />
                <label>Father's Name:</label>
                <input 
                type="text"
                required 
                value={father}
                onChange={(e)=>setFather(e.target.value)}
                />
                <label>Date of Birth:</label>
                <input 
                type="date"
                required 
                value={dob}
                onChange={(e)=>setDob(e.target.value)}
                />
                <label>Parent's Contact Number:</label>
                <input 
                type="text"
                required 
                value={parentco}
                onChange={(e)=>setParentco(e.target.value)}
                />
                <label>Permanent Address:</label>
                <textarea
                cols="30"
                rows="5"
                required
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                ></textarea>
                <label>Tenth Percentage:</label>
                <input 
                type="text"
                required 
                value={tenpercent}
                onChange={(e)=>setTenpercent(e.target.value)}
                />
                <label>Tenth Year:</label>
                <input 
                type="text"
                required 
                value={tenthyear}
                onChange={(e)=>setTenthyear(e.target.value)}
                />
                <label>Tenth Board:</label>
                <input 
                type="text"
                required 
                value={tenthboard}
                onChange={(e)=>setTenthboard(e.target.value)}
                />
                <label>Twelfth Percentage:</label>
                <input 
                type="text"
                required 
                value={twelfthpercent}
                onChange={(e)=>setTwelfthpercent(e.target.value)}
                />
                <label>Twelfth Year:</label>
                <input 
                type="text"
                required 
                value={twelfthyear}
                onChange={(e)=>setTwelfthyear(e.target.value)}
                />
                <label>Twelfth Board:</label>
                <input 
                type="text"
                required 
                value={twelfthboard}
                onChange={(e)=>setTwelfthboard(e.target.value)}
                />
                <label>Diploma Percentage:</label>
                <input 
                type="text"
                value={diplomapercent}
                onChange={(e)=>setDiplomapercent(e.target.value)}
                />
                <label>Diploma Year:</label>
                <input 
                type="text"
                value={diplomayear}
                onChange={(e)=>setDiplomayear(e.target.value)}
                />
                <label>Diploma Board:</label>
                <input 
                type="text"
                value={diplomaboard}
                onChange={(e)=>setDiplomaboard(e.target.value)}
                />
                <label>B.Tech 1st Year Percentage:</label>
                <input 
                type="text"
                required 
                value={btechfirst}
                onChange={(e)=>setBtechfirst(e.target.value)}
                />
                <label>B.Tech 2nd Year Percentage:</label>
                <input 
                type="text"
                required 
                value={btechsecond}
                onChange={(e)=>setBtechsecond(e.target.value)}
                />
                <label>B.Tech 5th Semester Percentage:</label>
                <input 
                type="text"
                required 
                value={btechfifth}
                onChange={(e)=>setBtechfifth(e.target.value)}
                />
                <label>B.Tech 6th Semester Percentage:</label>
                <input 
                type="text"
                required 
                value={btechsixth}
                onChange={(e)=>setBtechsixth(e.target.value)}
                />
                <label>B.Tech 3rd Year Percentage:</label>
                <input 
                type="text"
                required 
                value={btechthird}
                onChange={(e)=>setBtechthird(e.target.value)}
                />
                <label>Overall B.Tech Percentage:</label>
                <input 
                type="text"
                required 
                value={btech}
                onChange={(e)=>setBtech(e.target.value)}
                />
                <label>Year Gap in education:</label>
                <input 
                type="text"
                required 
                value={gap}
                onChange={(e)=>setGap(e.target.value)}
                />
                {/* <label>Resume</label>
                <input 
                type="file"
                required 
                value={resume}
                onChange={(e)=>setResume(e.target.files[0])}
                /> */}
                <label>Backlogs:</label>
                <input 
                type="text"
                required 
                value={backlog}
                onChange={(e)=>setBacklog(e.target.value)}
                />
                <label>Are you placed?</label>
                <input 
                type="text"
                required 
                value={placed}
                onChange={(e)=>setPlaced(e.target.value)}
                />
                <br /> <hr /><br />
                <i>
                <h1 style={{
                    textDecoration: "underline"
                }}>Fill only if Placed!</h1>
                </i>
                <br />
                <label>Company:</label>
                <input 
                type="text" 
                value={company}
                onChange={(e)=>setCompany(e.target.value)}
                />
                <label>Domain/Job Role:</label>
                <input 
                type="text" 
                value={domain}
                onChange={(e)=>setDomain(e.target.value)}
                />
                <label>CTC:</label>
                <input 
                type="text" 
                value={ctc}
                onChange={(e)=>setCtc(e.target.value)}
                />
                <br /><hr /><br />
                {!isPending &&<button>Register</button>}
                {isPending &&<button disabled>Registering...</button>}
            </form>
        </div>
     );
}
 
export default Apply;