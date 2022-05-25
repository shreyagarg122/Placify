import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Sorry</h1>
            <p>The page cannot be found<br/><br/></p>
            <Link to="/home" style={{
                color: '#123C69',
                fontWeight: '700'
            }}>Back to the site.</Link>
        </div>
     );
}
 
export default NotFound;