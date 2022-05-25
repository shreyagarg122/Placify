import { useHistory, useParams } from "react-router";
import useFetch from './useFetch';
import { db } from "./firebase";
import { collection } from "firebase/firestore";



const jobCollectionRef=collection(db,"jobs");

const JobDetails = () => {
    const {id} = useParams();
    const {data:job,isPending,error}= useFetch('http://localhost:8000/jobs/'+id);
    const history= useHistory();
    const d= new Date().toISOString().slice(0, 10);

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
                    <br />
                    <button onClick={handleApply}>Apply</button>
                    
                </article>
            )}
            
        </div>
     );
}
 
export default JobDetails;