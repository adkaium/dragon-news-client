import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const SignUp = () => {
    const {creatNewUser} = useContext(AuthContext);

    const handleSubmit = (e) =>{
        e.preventDefault()
        const form = e.target;
        const name= form.name.value;
        const photoUrl= form.photoURL.value;
        const email = form.email.value;
        const confrim = form.confrim.value;
        const password = form.password.value;
        console.log(name,photoUrl,email,confrim,password);
        if(confrim === password){
            creatNewUser(email,password)
        .then(res =>{
            console.log(res.user);
        })
        .catch( err => console.error(err))
        }else{
            console.error('password not match')
        }
        form.reset();
    }
    return (
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Enter Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Confrim Password</Form.Label>
        <Form.Control name='confrim' type="password" placeholder="confrim password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button><br/>

      <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
    </Form>
    );
};

export default SignUp;