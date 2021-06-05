import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import './CSS/card.css';
import twitchpng from './images/Twitch Buds Twitter (1).png'
import twitterPNG from './images/twitter.png'
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed'

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

    function handleTwitchBuds() {
        history.push('/help')
    }


    return (
        <>
        <div className="text-center mt-3 text-white">
        <p>
            <div>
                <img className="Gwardo" height="100" src={twitchpng}></img>
             <h1 className="mt-3">Welcome to Twitch Buds!</h1>
             <text>
                NEXT LEVEL STREAMER PROMOTION
            </text>
            </div>
            </p>
            
            <div className="Card">
                <h3>Our Social Media</h3>
                <Button className="Card m-1" onClick={handleTwitter}>Twitter</Button>
                <Button className="Card m-1" onClick={handleDiscord}>Discord</Button>
                <Button className="Card m-1" onClick={meetCreator}>Creator</Button>
                <Button className="Card" onClick={handleTwitchBuds}>What is Twitch Buds?</Button>
            </div>

        <div className="Card mt-3">
            <h3>Recent Tweets</h3>
            <TwitterTimelineEmbed
              sourceType="profile"
              // The preferred screen name goes next: 
              screenName="TwitchBuds"
              // Style options goes here:
              options={{ height: 600 }}
              theme="dark"
            />
        </div>

        </div>

        <div className="text-center Card mt-3">
            <h4 className="text-center mb-4">Login to Twitch Buds</h4>
            <Button onClick={twitterLogin}>
                <div className="text-center mb-1">
                    <img src={twitterPNG} height="30"></img>
                </div>
                <div className="text-center">
                    Sign In
                </div>  
            </Button>
        </div>

        <Card className="Card mt-4" >
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
