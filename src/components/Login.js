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

    //  Auth Error
    const [authError, setAuthError] = useState('')

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
    
    function handleDNP3() {
        window.open('https://twitch.tv/dnp3')
    }

    function handleGwardo() {
        window.open('https://twitch.tv/gwardo420')
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

    function handlePurchase() {

        if(currentUser){
            history.push('/purchase')
        } else {
            setAuthError('⚠️ You have to sign in to purchase a promotion!')
            toast('Please sign in to purchase a promotion!', {
                icon: '⚠️',
            });
        }

    }

    return (
        <>
        <h1 className="Title text-white text-center">Simple promotion for Gamers, Creators {'&'} Brands!</h1>
        <div className="text-center mt-3 text-white">
            
        <p>
            <div>
                <div className="mt-3">
                <Button variant="info" className="m-1 ButtonShadow" onClick={handleTwitter}>Twitter</Button>
                <Button variant="info" className="m-1 ButtonShadow" onClick={handleDiscord}>Discord</Button>
                <Button variant="info" className="m-1 ButtonShadow" onClick={meetCreator}>Creator</Button>
                <Button variant="info" className="m-1 ButtonShadow" onClick={contact}>Contact TwitchBuds</Button>
                <Button variant="info" className="m-1 ButtonShadow" onClick={handleWorks}>Take a tour!</Button>
                </div>

                {!currentUser && (
                    <div className="mt-3 m-3">
                        <Button variant="success" size="sm" className="w-50 ButtonShadow" onClick={twitterLogin}>
                            <div className="text-center mb-1">
                                <img src={twitterPNG} height="30"></img>
                            </div>
                            <div className="text-center">
                                Sign In With Twitter
                            </div>  
                        </Button>
                    </div>
                )}

                <div>
                    {authError && (
                        <div>{authError}</div>
                    )}
                <Button className="ButtonShadow mt-3" onClick={handlePurchase}>Purchase A Promotion</Button>
                </div>
            </div>
        </p>
            
        {currentUser && (
            <>
                <div className="Card mb-3">
                    <h5>Welcome, {currentUser.displayName || currentUser.email}!</h5>
                    
                    <div className="Description m-3">
                        <text>
                            Grow your audience with the most trusted streamer promotion platform. Gain organic followers with fully managed promotional campaigns - designed to help you grow your community.
                        </text>
                    </div>

                    <Button variant="info" className="m-1 ButtonShadow LoginHeader text-white" onClick={visitDashboard}>Visit Dashboard</Button>
                    <Button variant="info" className="m-1 ButtonShadow LoginHeader text-white" onClick={handleLogout}>Sign Out</Button>
                </div>
            </>
        )}

        {!currentUser && (
            <div className="text-center mt-3 mb-3">
                
                <div className="Description">
                    <text>
                        Grow your audience with the most trusted streamer promotion platform. Gain organic followers with fully managed promotional campaigns - designed to help you grow your community.
                    </text>
                </div>
                
            </div>
        )}

        <div className="SimplePromotions">
            <video className="mt-4 SimplePromotionsVideo" src="https://i.imgur.com/rRzU6tk.mp4" width="100%" autoPlay loop></video>
        <div className="Title mt-3 text-center m-2 ">
            <h4>Simple Promotions</h4>
            <h4 className="mt-3">
                1. Sign-In
            </h4>

            <h4 className="mt-3">
                2. Purchase a Promotion Slot
            </h4>

            <h4 className="mt-3">
                3. Expand Community Engagement
            </h4>
        </div>
        </div>


        {currentUser && (
            <>
            <h3>Top Supporters</h3>

            <div className="d-flex m-1">

                <Card className="Card m-2" style={{ width: '18rem' }}>
                <Card.Img variant="top" className="Card" src="https://static-cdn.jtvnw.net/jtv_user_pictures/8f14fd20-96bc-4b44-9df1-cb63daa14521-profile_image-300x300.png" />
                  <Card.Body>
                    <Card.Title>Gwardo420</Card.Title>
                    <Card.Text className="Card">
                        <div>
                            <h5>TwitchBuds Creator</h5>
                        </div>
                    Software Developer that loves to pay it forward. Creator of TwitchBuds & CryptoWatchr.
                    </Card.Text>
                    <Button className="LoginHeader ButtonShadow" variant="primary" onClick={handleGwardo}>Visit Gwardo420's Twitch</Button>
                  </Card.Body>
                </Card>

                <Card className="Card m-2" style={{ width: '18rem' }}>
                  <Card.Img variant="top" className="Card" src="https://static-cdn.jtvnw.net/jtv_user_pictures/fb266945-7611-40bf-822d-c80b084e65ba-profile_image-300x300.png" />
                  <Card.Body>
                    <Card.Title>DNP3</Card.Title>
                    <Card.Text className="Card">
                    Computer Engineer who does insane giveaways. Often referred to as the "Oprah" of Twitch {'&'} Twitter.
                    </Card.Text>
                    <Button variant="primary" className="LoginHeader ButtonShadow" onClick={handleDNP3}>Visit DNP3's Twitch</Button>
                  </Card.Body>
                </Card>

            </div>
            </>
        )}

        {!currentUser && (
            <>
            <h3>Top Supporters</h3>

            <div className="d-flex m-1">

                <Card className="Card m-2" style={{ width: '18rem' }}>
                  <Card.Img variant="top" className="Card" src="https://static-cdn.jtvnw.net/jtv_user_pictures/8f14fd20-96bc-4b44-9df1-cb63daa14521-profile_image-300x300.png" />
                  <Card.Body>
                    <Card.Title>Gwardo420</Card.Title>
                    <Card.Text className="Card">
                    <div>
                        <h5>TwitchBuds Creator</h5>
                    </div>
                    Software Developer that loves to pay it forward. Creator of TwitchBuds {'&'} CryptoWatchr.
                    </Card.Text>
                    <Button className="LoginHeader ButtonShadow" variant="primary" onClick={handleGwardo}>Visit Gwardo420's Twitch</Button>
                  </Card.Body>
                </Card>

                <Card className="Card m-2" style={{ width: '18rem' }}>
                  <Card.Img variant="top" className="Card" src="https://static-cdn.jtvnw.net/jtv_user_pictures/fb266945-7611-40bf-822d-c80b084e65ba-profile_image-300x300.png" />
                  <Card.Body>
                    <Card.Title>DNP3</Card.Title>
                    <Card.Text className="Card">
                    Computer Engineer who does insane giveaways. Often referred to as the "Oprah" of Twitch {'&'} Twitter.
                    </Card.Text>
                    <Button className="LoginHeader ButtonShadow" variant="primary" onClick={handleDNP3}>Visit DNP3's Twitch</Button>
                  </Card.Body>
                </Card>
            </div>
            </>
        )}

        {loading2 && (
            <h3 className="Card mt-3">Loading current promotions...</h3>
        )}
        </div>

        {!currentUser && (
                <>
                <Card className="Card mt-4" >
                    <h4 className="text-center mb-4 mt-4 LoginHeader">Login with Email</h4>
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
                            <Button disabled={loading} className="w-100 ButtonShadow" type="submit">Log In</Button>
                        </Form>
                        <div>
                            <Link to="/forgot-password">
                                Forgot Password
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
                
                <div className="w-100 text-center mt-3 mb-3 text-white text-shadow Card">
                    Need an account? <Link to="/signup"> Sign Up </Link>
                 </div>
                </>
            )}

            <footer className="text-center text-white mb-3">Created by Gwardo420 | Supporting Streamers WorldWide</footer>
        </>
    )
}
