import { Link } from "react-router-dom"

const BlogList = ({jobs,title}) => {

    jobs.sort((a,b)=>(a.id<b.id)?1:-1)

    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {jobs.map((job)=>(
                <div className="blog-preview" key={job.id}>
                    <Link to={`/jobs/${job.id}`}>
                        <h2>{job.title}</h2>
                        <p>posted by {job.author}</p>
                    </Link>
                </div>
             ))}
        </div>
      );
}
 
export default BlogList;