import useFetch from "./useFetch";
import BlogList from './BlogList';
import { useState } from "react";

const SearchBar = () => {
    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
    const [author,setAuthor]= useState('');

    const check=(e)=>{
        e.preventDefault();
        console.log(author);
    }

    return (
        <div className="search">
            <form>
            <label>Search Author: </label>
            <input
            type="text"
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
            />
            <button onClick={check}>Check</button>
            </form>
            { error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Author: {blogs.author}</p>
                    <div>{blogs.body}</div>
                </article>
            )}                
        </div>
      );
}
 
export default SearchBar;


