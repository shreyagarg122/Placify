import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import admin from './images/admin.png';
import student from './images/student.jpg'

const Choose = () => {

    const history=useHistory();

    const handleAdmin=()=>{
        
        history.push('/login');
    }

    const handleStudent=()=>{
        history.push('/apply');
    }
    

    return ( 
        <div className="choose">
            <div className="admin" onClick={handleAdmin}>
                <img src={admin} />
                <h1>Admin</h1>
            </div>
            <div onClick={handleStudent}>
                <img src={student} />
                <h1>Students</h1>
            </div>
        </div>
     );
}
 
export default Choose;