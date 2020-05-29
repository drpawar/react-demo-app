import React from 'react';
import {Alert, Form, Button} from 'react-bootstrap'

import fire from './firebase/firebase';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
            msg: ''
        }
    }

    handleChange (e) {
        console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
    };

    login (e) {
        fire.auth().signInWithEmailAndPassword(this.state.email , this.state.password).then((res) => {
            console.log("user at firebase", res);
            if(res.message) {
                this.state.msg = res.message;
            }
        }).catch((e)=>{
            console.log("error",e)
        })
    }

    render() {
        return (
            <div>
                <header style={{padding: '10px', backgroundColor: '#007bff', color: '#fff'}}>Login</header>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={(e)=> {this.login(e)}}>
                        Submit
                    </Button>
                    {this.state.msg ? (<Alert variant="success">
                    <p className="mb-0">
                        {this.state.msg}
                    </p>
                    </Alert>) : ''}
                </Form>
            </div>
        )
    }
}