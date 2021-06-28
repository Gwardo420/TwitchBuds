import React, { useRef, useState, useEffect } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import './CSS/card.css';

import twitchpng from './images/Twitch Buds Twitter (1).png'
import twitterPNG from './images/twitter.png'
import twitchlogo from './images/simpletwitch.png'

import { TwitterTweetEmbed, TwitterTimelineEmbed, TwitterDMButton } from 'react-twitter-embed'
import { useCollection } from 'react-firebase-hooks/firestore';
import { database } from '../firebase';
import toast, { Toaster } from 'react-hot-toast';
import { Badge } from 'react-bootstrap';


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

    function handleDNP3Twitter() {
        window.open('https://twitter.com/dnpthree')
    }

    function handleGwardo() {
        window.open('https://twitch.tv/gwardo420')
    }

    function handleGwardoTwitter() {
        window.open('https://twitter.com/twitchbuds')
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

    function handleBotStuff() {
        window.open(`https://retweetpicker.vercel.app/`)
    }

    function handleWinner1() {
        window.open('https://twitter.com/Creeping_Debt_')
    }

    function handleWinner2() {
        window.open('https://twitter.com/DylanDyylas')
    }

    function handleSigmir() {
        window.open('https://twitter.com/sighmir')
    }

    function handleBCGTwitter() {
        window.open('https://twitter.com/BlackCartelGmg')
    }

    function handleBCG() {
        window.open('https://www.twitch.tv/cblack47')
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

                <div>
                    {authError && (
                        <div>{authError}</div>
                    )}
                <Button className="ButtonShadow mt-3" onClick={handlePurchase}>Purchase A Promotion</Button>
                </div>

                {currentUser && (
                    <>
                        <Button variant="info" className="m-1 mt-3 ButtonShadow LoginHeader text-white" onClick={visitDashboard}>Visit Dashboard</Button>
                        <Button variant="info" className="m-1 mt-3 ButtonShadow LoginHeader text-white" onClick={handleLogout}>Sign Out</Button>
                    </>
                )}

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

                <div className="SimplePromotions mt-3">
                    <div className="Description Card">Twitch Buds runs giveaways on Twitter to help streamers around the world engage & promote their content seamlessly!</div>
                    <h3 className="LoginHeader">Recent Twitch Buds Winners</h3>
                    <div className="d-flex justify-content-center">
                    <Card className="SimplePromotionsv2 m-1" style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="" src="https://pbs.twimg.com/profile_images/1407247307645624320/Bi1JbfYd_400x400.jpg" />
                          <Card.Body>
                            <Card.Title className="LoginHeader">Macy <span className="badge badge-pill badge-dark">500 Bits Winner</span></Card.Title>
                            <Card.Text className="">
                            
                            <Button className="text-white" onClick={handleWinner1}>
                            <img src={twitterPNG} height="30"></img>
                                @Creeping_Debt_
                            </Button>
                            
                            </Card.Text>

                          </Card.Body>
                        </Card>

                        <Card className="SimplePromotionsv2 m-1" style={{ width: '18rem' }}>
                        <Card.Img variant="top" className="" src="https://pbs.twimg.com/profile_images/1359724436337938441/i2pFGxez_400x400.jpg" />
                          <Card.Body>
                            <Card.Title className="LoginHeader">Dylan Dysa <span className="badge badge-pill badge-dark">500 Bits Winner</span></Card.Title>
                            <Card.Text className="">
                            
                            <Button className="text-white" onClick={handleWinner2}>
                            <img src={twitterPNG} height="30"></img>
                                @DylanDyylas
                            </Button>
                            
                            </Card.Text>
                        
                          </Card.Body>
                        </Card>
                    </div>
                </div>

                {!currentUser && (
                    <div className="text-center mt-3 mb-3">

                        <div className="Description">
                            <div className="Description Card">
                                Grow your audience with the most trusted streamer promotion platform. Gain organic followers with fully managed promotional campaigns - designed to help you grow your community.
                            </div>
                        </div>

                    </div>
                )}

            </div>
        </p>
            

        <div className="SimplePromotions">
            <h3 className="LoginHeader">Simple Promotions</h3>
            <video className="mt-4 SimplePromotionsVideo" src="https://i.imgur.com/rRzU6tk.mp4" width="100%" autoPlay loop></video>
        <div className="Title mt-3 text-center m-2 ">

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

        <div className="Description SimplePromotions mt-3">
            <h2 className="LoginHeader">Discord Retweet Picker</h2>
            <div className="mt-3">
                <text>I created a Discord Bot that will help you choose a winner for your Twitter Giveaway!</text>
            </div>
            <div className="mt-3 mb-3">
                <text>This will choose from the Retweets on the account that you provide.</text>
            </div>
            <div>
                <img className="SimplePromotionsVideo w-100" src="https://i.imgur.com/ptFzvsD.gif"></img>
            </div>
            <Button className="mt-3 mb-2" onClick={handleBotStuff}>Retweet Picker Homepage</Button>
        </div>


            <>
            <h3 className="LoginHeader">Top Supporters</h3>

            <div className="d-flex justify-content-center SimplePromotions">

                <Card className="SimplePromotionsv2 m-1" style={{ width: '18rem' }}>
                <Card.Img variant="top" className="" src="https://static-cdn.jtvnw.net/jtv_user_pictures/8f14fd20-96bc-4b44-9df1-cb63daa14521-profile_image-300x300.png" />
                  <Card.Body>
                    <Card.Title>Gwardo420 <span className="badge badge-pill badge-dark">Creator</span></Card.Title>
                    <Card.Text className="Description Card">
                    Software Developer that loves to pay it forward. Creator of TwitchBuds. Moderate Coding Skills. Gaming Noob.
                    </Card.Text>
                   
                    <section>
                        <Link className="text-white " onClick={handleGwardo}>
                            <img src={twitchlogo} height="30"></img>
                            Twitch
                        </Link>
                    </section>

                    <section>
                        <Link className="text-white " onClick={handleGwardoTwitter}>
                            <img src={twitterPNG} height="30"></img>
                            Twitter
                        </Link>
                    </section>
                  </Card.Body>
                </Card>

                <Card className="SimplePromotionsv2 m-1" style={{ width: '18rem' }}>
                  <Card.Img variant="top" className="" src="https://static-cdn.jtvnw.net/jtv_user_pictures/fb266945-7611-40bf-822d-c80b084e65ba-profile_image-300x300.png" />
                  <Card.Body>
                    <Card.Title>DNP3 <span className="badge badge-pill badge-dark">Top Supporter</span></Card.Title>
                    <Card.Text className="Description Card">
                    Computer Engineer who does insane giveaways. Often referred to as the "Oprah" of Twitch {'&'} Twitter.
                    </Card.Text>

                    <section>
                        <Link className="text-white " onClick={handleDNP3}>
                            <img src={twitchlogo} height="30"></img>
                            Twitch
                        </Link>
                    </section>

                    <section>
                        <Link className="text-white " onClick={handleDNP3Twitter}>
                            <img src={twitterPNG} height="30"></img>
                            Twitter
                        </Link>
                    </section>

                  </Card.Body>
                </Card>

            </div>

            <div className="d-flex justify-content-center SimplePromotions">
            <Card className="SimplePromotionsv2 m-1" style={{ width: '18rem' }}>
                <Card.Img variant="top" className="" src="https://pbs.twimg.com/profile_images/1223687120151371782/-uBGaAQk_400x400.jpg" />
                  <Card.Body>
                    <Card.Title>Sighmir <span className="badge badge-pill badge-dark">CTO</span></Card.Title>
                    <Card.Text className="Description Card">
                    Passionate programmer and fast learner, interested in learning new things with every opportunity.
                    </Card.Text>

                    <section>
                        <Link className="text-white " onClick={handleSigmir}>
                            <img src={twitterPNG} height="30"></img>
                            Twitter
                        </Link>
                    </section>

                  </Card.Body>
                </Card>

                <Card className="SimplePromotionsv2 m-1" style={{ width: '18rem' }}>
                  <Card.Img variant="top" className="" src="https://pbs.twimg.com/profile_images/1299722768502665218/O5C7D_zW_400x400.jpg" />
                  <Card.Body>
                    <Card.Title>Black Cartel Gaming <span className="badge badge-pill badge-dark">Top Supporter</span></Card.Title>
                    <Card.Text className="Description Card">
                    BCG is a bunch of jackwagons helping others.
                    </Card.Text>

                    <section>
                        <Link className="text-white " onClick={handleBCG}>
                            <img src={twitchlogo} height="30"></img>
                            Twitch
                        </Link>
                    </section>

                    <section>
                        <Link className="text-white " onClick={handleBCGTwitter}>
                            <img src={twitterPNG} height="30"></img>
                            Twitter
                        </Link>
                    </section>

                  </Card.Body>
                </Card>     
            </div>

            </>

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
