import {Link} from 'react-router-dom';
import { useHistory } from 'react-router';
import { useUserAuth } from './context/UserAuthContext';

const Navhome = () => {

    const history= useHistory();

    const handleClick=()=>{
        history.push('/');
    }

    // const {user, logOut}=useUserAuth();

    // const handleLogOut=async ()=>{
    //     try{
    //         await logOut();
    //     }catch(err){
    //         console.log(err.message);
    //     }
    // };

    return ( 
        <nav className="navbar">
            <h1 onClick={handleClick}>Placify</h1>
            {/* <h1>Placify</h1> */}
            <div className="links">
                {/* <Link to="/create">New Job</Link> */}
                {/* <Link to="/apply">Register</Link> */}
                <Link to="/homestudents">Jobs</Link>
                <Link to="/contact">Contact Us</Link>
                {/* <Link to="/profile">User</Link> */}
                {/* <button onClick={handleLogOut}>Log Out</button> */}
            </div>
        </nav>
     );
}
 
export default Navhome;