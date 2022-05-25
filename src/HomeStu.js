import JobList from './JobList';
import useFetch from './useFetch';

const HomeStu = () => {
    const {data:jobs,isPending,error}= useFetch('http://localhost:8000/jobs');

    return (
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {jobs && <JobList jobs={jobs} title="All jobs:" />}
        </div>
      );
}
 
export default HomeStu;
