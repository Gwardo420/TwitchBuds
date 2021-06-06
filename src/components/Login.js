import React, { useRef, useState, useEffect } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import './CSS/card.css';
import twitchpng from './images/Twitch Buds Twitter (1).png'
import twitterPNG from './images/twitter.png'
import { TwitterTweetEmbed, TwitterTimelineEmbed, TwitterDMButton } from 'react-twitter-embed'
import { useCollection } from 'react-firebase-hooks/firestore';
import { database } from '../firebase';

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()

    // Other Data
    const { login, twitter, currentUser, logout } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    // Set New Promotion List
    const [loading2, setLoading2] = useState(false)
    const [promotions, setPromotions] = useState()
    const history = useHistory()

    function getPromotions() {

        setLoading2(true);

        setTimeout(() => {
            //setPromotions(posts)
        }, 1000)

        setTimeout(() => {
            setLoading2(false)
        }, 2000)
    }

    useEffect(() => {
        getPromotions()
    }, [])

    async function handleSumbit(e) {
        e.preventDefault()

        try {
        
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
        
        } catch {
        
            setError('Failed to log in')
        
        }

        setLoading(false)

    }

    async function twitterLogin() {
        setError('')
        setLoading(true)
        await twitter()
        history.push('/successful')
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

    function contact() {
        history.push('/contact')
    }

    function visitDashboard() {
        history.push('/')
    }
    
    async function handleLogout() {
        try{
            await logout()
            history.push('/login')
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <>
        <div className="text-center mt-3 text-white">
        <p>
            <div>
                <h1 className="mt-3">Welcome to Twitch Buds!</h1>
                <text>
                    NEXT LEVEL STREAMER PROMOTION
                    </text>
            </div>
            </p>
            
            {currentUser && (
                <>
                    <div className="Card mb-3">
                        <Button variant="success" className="m-1" onClick={visitDashboard}>Visit Dashboard</Button>
                        <Button variant="danger" onClick={handleLogout}>Sign Out</Button>
                    </div>
                </>
            )}

            <div className="Card">
                <h3>Our Social Media</h3>
                <Button className="m-1" onClick={handleTwitter}>Twitter</Button>
                <Button className="m-1" onClick={handleDiscord}>Discord</Button>
                <Button className="m-1" onClick={meetCreator}>Creator</Button>
                <Button className="m-1" onClick={handleTwitchBuds}>What is Twitch Buds?</Button>
                <Button className="m-1" onClick={contact}>Contact TwitchBuds</Button>
            </div>

        {loading2 && (
            <h3 className="Card mt-3">Checking for current promotions</h3>
        )}

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

        {!currentUser && (
                <>
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
                <div className="w-100 text-center mt-3 text-white text-shadow Card">
                    Need an account? <Link to="/signup"> Sign Up </Link>
                 </div>
                </>
            )}


        <div className="Card text-center mt-3">
            <h3>Twitch Buds Channel</h3>
            <iframe src="https://player.twitch.tv/?channel=twitchbuds&parent=http://www.twitchbuds.com" frameborder="0" allowfullscreen="true" scrolling="no"></iframe>
        </div>
        </>
    )
}
