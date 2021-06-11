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
import toast, { Toaster } from 'react-hot-toast';

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

    const notify = () => toast('Signing you in...');

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
            notify()

        } catch {
        
            setError('Failed to log in')
        
        }

        setLoading(false)

    }

    async function twitterLogin() {

        
        toast('Signing you in!', {
            icon: '👏',
        });

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

    function contact() {
        history.push('/contact')
    }

    function visitDashboard() {
        history.push('/')
    }
    
    async function handleLogout() {
        try{
            await logout()

            toast('You signed out!', {
                icon: '👏',
            });

            history.push('/login')
        } catch(err) {
            console.log(err)
        }
    }

    function handleWorks() {
        history.push('/help')
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
                        <h5>Welcome, {currentUser.displayName}!</h5>
                        <Button variant="info" className="m-1" onClick={visitDashboard}>Visit Dashboard</Button>
                        <Button variant="info" className="m-1" onClick={handleLogout}>Sign Out</Button>
                    </div>
                </>
            )}

            {!currentUser && (
                <div className="text-center Card mt-3 mb-3">
                    <h4 className="text-center mb-4">Login to Twitch Buds</h4>
                    <Button variant="primary" className="w-100" block onClick={twitterLogin}>
                        <div className="text-center mb-1">
                            <img src={twitterPNG} height="30"></img>
                        </div>
                        <div className="text-center">
                            Sign In
                        </div>  
                    </Button>
                </div>
            )}


            <div className="PromotionCard mt-3">
                <h3>Our Social Media</h3>
                <Button variant="info" className="m-1" onClick={handleTwitter}>Twitter</Button>
                <Button variant="info" className="m-1" onClick={handleDiscord}>Discord</Button>
                <Button variant="info" className="m-1" onClick={meetCreator}>Creator</Button>
            </div>

            <div className="PromotionCard mt-3">
                <h3>Contact Us Directly</h3>
                <Button variant="info" className="m-1" onClick={contact}>Contact TwitchBuds</Button>
            </div>

            <div className="PromotionCard mt-3">
                <h3>See how this works</h3>
                <Button variant="info" className="m-1" onClick={handleWorks}>Take a tour!</Button>
            </div>

        {loading2 && (
            <h3 className="Card mt-3">Loading current promotions...</h3>
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


        <div className="Card text-center mt-3 mb-3">
            <h3>Twitch Buds Channel</h3>
            <iframe src={"https://player.twitch.tv/?channel=twitchbuds&parent=https://www.twitchbuds.com/login"} frameborder="0" allowfullscreen="true" scrolling="no"></iframe>
        </div>
        </>
    )
}
