import { useState } from "react";
import { useHistory } from "react-router";
import JobDataService from "../src/context/jobservices";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');
    const [apply,setApply]= useState('');
    const [date,setDate]= useState('');
    const [ctc,setCtc]= useState('');
    const [students,setStudents]=useState([]);
    const [message,setMessage]= useState({error:false,msg:""});
    const [isPending,setIsPending]= useState(false);
    const history = useHistory();

    const handleSubmit= async (e)=>{
        e.preventDefault();
        setMessage("");
        if(title==="")
        {
            setMessage({error:true,msg:"All fields are mandatory!"});
            return;
        }
        const blog={title,author,body,apply,date,students,ctc};
        
        setIsPending(true);

        try{
            await JobDataService.addJobs(blog);
            setMessage({error:false, msg:""});
            history.push('/home');
        }
        catch(err) {
            setMessage({error:true,msg:err.message});
        }

        fetch('http://localhost:8000/jobs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false);
            // history.go(-1);
            history.push('/home');
        });
    }

    return ( 
        <div className="create">
            <h1>Add a New Job</h1>
            <br />
            <form onSubmit={handleSubmit}> 
                <label>Company Name:</label>
                <input 
                type="text"
                required 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Details:</label>
                <textarea
                cols="30"
                rows="10"
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Posted By:</label>
                <input
                required
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                />
                <label>CTC:</label>
                <input
                required
                value={ctc}
                onChange={(e)=>setCtc(e.target.value)}
                />
                <label>Application Link:</label>
                <input
                required
                value={apply}
                onChange={(e)=>setApply(e.target.value)}
                />
                <label>Deadline Date</label>
                <input 
                type="date"
                required 
                value={date}
                onChange={(e)=>setDate(e.target.value)}
                />
                {!isPending &&<button>Add Job</button>}
                {isPending &&<button disabled>Adding Job...</button>}
            </form>
        </div>
     );
}
 
export default Create;