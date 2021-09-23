import React, { useState } from 'react'
import Button from '@restart/ui/esm/Button'
import { Container, Form } from 'react-bootstrap'
import { iso3166api } from '../services/iso3166api'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router'

export const Login = ({setToken}) => {
    
    const [login, setLogin] = useState({
        email:'',
        password:''
    })

    const history = useHistory()
    
    const handleLogin = (e) => {
        e.preventDefault()

        iso3166api.Register(login)
        .then((res) => {
            console.log("entre al login")
            setToken(res.token)
            history.push("/")
            
            
        })
       
        .catch(err=> {
            Swal.fire({
                icon: 'Error',
                title: 'ouh we have a problem!',
                text: ` ${err.toString()}`,
                confirmButtonText: 'close'
            })
        })
    }

    const handleInputChange = (e) => {
        
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Container className="d-flex  pt-5">
        <Form className="w-50 mx-auto align-items-center">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={login.email} onChange={handleInputChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={login.password}  onChange={handleInputChange}/>
        </Form.Group>
       
        <Button className="btn btn-primary" type="submit" onClick={(evt) => handleLogin(evt)}>
          Login
        </Button>
      </Form>
      </Container>
    )

}