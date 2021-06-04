import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import './CSS/card.css';
import gwardo from './images/gwardo.png'
import discord from './images/discord.png'
import twitter from './images/twitter.png'

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

    function cryptoWatchr() {
        window.open('https://cryptowatchr.io')
    }

    function cluChart() {
        window.open('https://cluchart.vercel.app')
    }

    function cluBot() {
        window.open('https://clubot.vercel.app')
    }

    function linkedIn() {
        window.open('https://www.linkedin.com/in/torrey-kimbrough-540902206/')
    }

    return (

        <>
        <div className="text-center Card mt-3">
        <p>
            <div>
             <h1 className="mt-3">Welcome to Twitch Buds!</h1>   
             <text>
                We are Next Level Streamer Promotion
            </text>
            </div>
            </p>
        </div>

        <div className="text-center mt-3 Card mb-3">
            <img className="mt-3 mb-3" height="50" src={discord}></img>
            <h3>Automatic Live Posts</h3>
            
            <text>Twitch Buds Discord will automatically post when you go LIVE on Twitch if you have streamer mode enabled.</text>
            
            <p>
                <text>LIVE NOW posts are posted right in the 🔴 | LIVE NOW channel.</text>
            </p>
            
            <p>
                <Button className="mt-3 mb-3" onClick={handleDiscord}>Join the Discord</Button>
            </p>
        </div>

        <div className="text-center mt-3 Card mb-3">
            <img className="mt-3 mb-3" height="70" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"></img>
            
            <h3>Twitter Giveaway's</h3>
            <text>We host giveaway's for Bits on Twitch and other incentive's over on the Twitch Buds Twitter account.</text>
            <p>Goodluck to all participants!</p>
            <p>This is just another way that we give back to the community and inspire users to share their content.</p>
        
            <div className="text-center mb-3">
            <Button className="mb-3" onClick={handleTwitter}>Follow Our Twitter</Button>
            </div>
        </div>

        <div className="text-center Card mb-3">
                 <h3 className="mt-3 mb-3">How does this work?</h3>   
                 <div className="mt-3 mb-3">
                    Purchase a promotion spot on the Twitch Buds Twitter page for a set amount of time.
                </div>
            </div>

        <div className="text-center Card">
             <h3 className="mt-3 mb-3">Meet The Creator</h3> 
             <div className="mb-3 mt-3">
                 <img className="Gwardo" src={gwardo}></img>
             </div>
             <h4>Hi, I am Gwardo420</h4>
             <text className="mt-2">
                I am a self taught software engineer that wants to help smaller streamers grow their content at a whole new level.
            </text>
            <div className="mt-2 mb-2">
                I created this just to see how far I could take my coding skills.
            </div>
            <p className="text-bold">Thank you for checking out Twitch Buds</p>
            <div>
                <h3>Check out my other projects</h3>
            </div>
            <Button className="m-1" onClick={cryptoWatchr}>CryptoWatchr</Button>
            <Button className="m-1" onClick={cluChart}>CluChart</Button>
            <Button className="m-1" onClick={cluBot}>CluBot</Button>
            <Button className="m-1" onClick={linkedIn}>LinkedIn</Button>
        </div>

        <Card className="Card mt-4">
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


        <div className="mt-3 text-center Card">
            <p>
                <div>
                    <h3>Discord Bot</h3>   
                    <text>
                        Coming Soon! This will be announced when it is available.
                    </text>
                </div>
            </p>
        </div>
        </>
    )
}
