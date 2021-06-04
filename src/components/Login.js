import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import './CSS/card.css';

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, twitter } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSumbit(e) {
        e.preventDefault()

        try {
        
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        
        } catch {
        
            setError('Failed to log in')
        
        }

        setLoading(false)

    }

    async function twitterLogin() {
        setError('')
        setLoading(true)
        await twitter()
        history.push('/')
    }

    function handleTwitter() {
        window.open('https://twitter.com/twitchbuds')
    }

    function handleDiscord() {
        window.open('https://discord.gg/JbsdXES')
    }

    function meetCreator() {
        history.push('/creator')
    }


    return (

        <>
        <div className="text-center mt-3 text-white">
        <p>
            <div>
             <h1 className="mt-3">Welcome to Twitch Buds!</h1>   
             <text>
                We are Next Level Streamer Promotion
            </text>
            </div>
            </p>
            
            <div className="m-1">
                <Button onClick={handleTwitter}>Follow Our Twitter</Button>
            </div>

            <div className="m-1">
                <Button onClick={handleDiscord}>Join Our Discord</Button>
            </div>

            <div className="m-1">
                <Button onClick={meetCreator}>Creator</Button>
            </div>
        </div>

        <Card className="Card mt-4" >
        <h4 className="text-center mb-4">Login with Twitter</h4>
            <Button onClick={twitterLogin}>
                Twitter Login
            </Button>
            <h4 className="text-center mb-4 mt-4">Login with Email</h4>
            <Card.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form className="text-white" onSubmit={handleSumbit}>
                    <Form.Group id="email">
                        <Form.Label >
                            Email
                        </Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label >
                            Password
                        </Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                </Form>
                <div>
                    <Link to="/forgot-password">
                        Forgot Password
                    </Link>
                </div>
            </Card.Body>
        </Card>

        <div className="w-100 text-center mt-2 text-white text-shadow Card">
            Need an account? <Link to="/signup"> Sign Up </Link>
        </div>

        </>
    )
}
