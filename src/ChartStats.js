const ChartStats = ({students,name}) => {

    var sixty=Object.keys(students.filter((student)=>student.btech>="60")).length;
    var eighty=Object.keys(students.filter((student)=>student.btech>="80")).length;
    var back=Object.keys(students.filter((student)=>student.backlog!="0")).length;
    var gaps=Object.keys(students.filter((student)=>student.gap!="0")).length;
    var placed=Object.keys(students.filter((student)=>student.placed==='yes' || student.placed==='Yes' || student.placed==='YES')).length;
    var all=Object.keys(students).length;

    return ( 
        <>
        <h1>{name}</h1>
        <div className="chart-list">
            {/* <h1>{name}</h1> */}
            <div className="blog-preview">
                <h2>Above 60%</h2>
            <h1>{Math.round((sixty/all)*100)}%</h1>
            </div>
            <div className="blog-preview">
            <h2>Above 80%</h2>
            <h1>{Math.round((eighty/all)*100)}%</h1>
            </div>
            <div className="blog-preview">
            <h2>Placed Students</h2>
            <h1>{Math.round((placed/all)*100)}%</h1>
            </div>
            <div className="blog-preview">
            <h2>Students with backlogs</h2>
            <h1>{Math.round((back/all)*100)}%</h1>
            </div>
            <div className="blog-preview">
            <h2>Students with year gaps</h2>
            <h1>{Math.round((gaps/all)*100)}%</h1>
            </div>
        </div>
        </>
     );
}
 
export default ChartStats;


