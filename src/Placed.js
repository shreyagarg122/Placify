import PlaceList from './PlaceList';
import useFetch from './useFetch';
import { useState } from 'react';

const Placed = () => {

    const {data:students,isPending,error}= useFetch('http://localhost:5000/students');

    const [search,setSearch]= useState("");
    const [show,setShow]=useState("none");

    return ( 
        <>
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                if(show=="none")
                    setShow(!show)
                else
                    setShow("none")
                }}>
            <input type="text" placeholder="Search by Company.." style={{
                position: "absolute",
                right: "25%",
                display: "block",
                backgroundColor: "#DEF2F1",
                fontWeight: "500",
                boxSizing: "border-box",
                border: "1px solid #ddd",
                width: "15%",
                marginTop: "7px",
                padding: "6px 10px"
            }} 
            onChange={(e)=>{
                setSearch(e.target.value)
                console.log(search)
            }} />
            <button style={{
                position: "absolute",
                right: "23.5%",
                background: "#123C69",
                color: "#fff",
                border: "0",
                padding: "8px",
                borderRadius: "45px",
                cursor: "pointer",
                top: "200px"               
            }} onClick={()=>{
                console.log("clicked")
            }}></button>
            </form>
        </div>
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            <div style={{display:show}}>
                {students && <PlaceList students={students.filter((student)=>student.company==search)} name="Searches:" />}
            </div>
            {students && <PlaceList students={students.filter((student)=>student.placed==='yes' || student.placed==='Yes' || student.placed==='YES')} name="All Placed Students:" />}
        </div>
        </>
     );
}
 
export default Placed;