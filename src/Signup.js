import react, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Link, useHistory } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";

const Signup = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {signUp} = useUserAuth();
    const [error, setError] = useState("");
    const history=useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            history.push('/home');
        }catch (err) {
            setError(err.message);
        }
    }
    return (
        <>
         <div className="create p-4 box">
            <h1 className="mb-3">Sign Up</h1>
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
                        Sign Up
                    </Button>
                </div>
            </Form>
            <br />
            <hr />
            <br />
        </div>
        <div className="create p-4 box mt-3 text-center">
            Have an account? 
            <br />
            <Link to="/login">Login</Link>
        </div>
        </>        
      );
}
 
export default Signup;