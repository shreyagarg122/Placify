import { useState } from 'react';
import ChartStats from './ChartStats';
import useFetch from './useFetch';

const Charts = () => {

    const {data:students,isPending,error}= useFetch('http://localhost:5000/students');
    

    return ( 
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {students && <ChartStats students={students} name="Charts:" />}
        </div>
     );
}
 
export default Charts;