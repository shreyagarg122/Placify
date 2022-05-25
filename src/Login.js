import react, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {logIn} = useUserAuth();
    const [error, setError] = useState("");
    const history=useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            history.push('/home');
        }catch (err) {
            setError(err.message);
        }
    }

    return (
        <>
         <div className="create p-4 box">
            <h1 className="mb-3">Login</h1>
            {error && <div>{error}</div>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                type="email" 
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control 
                type="password" 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                />
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button variant="primary" type="Submit">
                        Log In
                    </Button>
                </div>
            </Form>
            <br />
            <hr />
            <br />
        </div>
        <div className="create p-4 box mt-3 text-center">
            Don't have an account?
            <br /> 
            <Link to="/signup">Sign up</Link>
        </div>
        </>        
      );
}
 
export default Login;