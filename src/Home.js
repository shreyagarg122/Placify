import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data:jobs,isPending,error}= useFetch('http://localhost:8000/jobs');

    return (
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {jobs && <BlogList jobs={jobs} title="All jobs:" />}
        </div>
      );
}
 
export default Home;
