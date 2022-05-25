import { Link } from "react-router-dom"

const StudentList = ({students,name}) => {

    students.sort((a,b)=>(a.name>b.name)?1:-1)

    return (
        <div className="blog-list">
            <h1>{name}</h1>
            {students.map((student)=>(
                <div className="blog-preview" key={student.id}>
                    <Link to={`/students/${student.id}`}>
                        <h2>{student.name}</h2>
                        <p>Department: {student.dept}</p>
                    </Link>
                </div>
             ))}
        </div>
      );
}
 
export default StudentList;