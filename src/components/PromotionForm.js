import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { database, serverTimestamp } from '../firebase';
import './CSS/card.css';
import twitchLOGO from './images/twitchLogoGradient.png'
import twitterLogo from './images/twitter.png'

export default function PromotionGiveaway() {
    const { currentUser, email } = useAuth()
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [checkout, setCheckout] = useState(false)

    // Information
    const [twittername, setTwittername] = useState("")
    const [twitchName, setTwitchName] = useState("")
    const [message, setMessage] = useState("")
    const [promoType, setPromoType] = useState("")
    const [twitterURL, setTwitterURL] = useState("")
    const [twitchURL, setTwitchURL] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        setLoading(true)

        database.promotion.doc(currentUser.email).collection("submittions").add({
            image: currentUser.photoURL,
            twitterUsername: currentUser.displayName,
            promoName: twittername,
            twitchUsername: twitchName,
            promoLength: 24,
            userEmail: currentUser.email,
            promotionType: promoType,
            paid: "false",
            acitvated: "false",
            createdAt: serverTimestamp()
        })

        database.users.add({
            image: currentUser.photoURL,
            twitterUsername: currentUser.displayName,
            promoName: twittername,
            promoLength: 24,
            twitterURL: twitterURL,
            createdAt: serverTimestamp()
        })

        setTwittername("")
        setTwitchName("")
        setPromoType("")
        setMessage("Promotion Form Succesfully Submitted")
        setLoading(false)
        history.push("/")
    }

    return (
        <>
        <div className="Card mt-3">
            <Card className="Card">
                <Card.Body>
                    <h2 className="text-center">Submit A Promotion</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                        <Form.Label className="mt-3">
                                <h4>Twitter Username <img src={twitterLogo} height="30"></img></h4>
                            </Form.Label>
                            <Form.Control

                            type="text" 
                            value={twittername}
                            onChange={e => setTwittername(e.target.value)}
                            placeholder="Supply Twitter Username"

                            >

                            </Form.Control>

                            <Form.Label className="mt-3"> 
                                <h4>Twitch Username <img src={twitchLOGO} height="30"></img></h4>
                            </Form.Label>
                            <Form.Control

                            type="text" 
                            required
                            value={twitchName}
                            onChange={e => setTwitchName(e.target.value)}
                            placeholder="Supply Twitch Name"

                            >

                            </Form.Control>

                            <Form.Label className="mt-3">
                                <h4>Twitter URL <img src={twitterLogo} height="30"></img></h4>
                            </Form.Label>
                            <Form.Control

                            type="text" 
                            value={twitterURL}
                            required
                            onChange={e => setTwitterURL(e.target.value)}
                            placeholder="Supply Twitter URL"

                            >


                            </Form.Control>

                            <Form.Label className="mt-3">
                                    <h4>Twitch URL <img src={twitchLOGO} height="30"></img></h4>
                                </Form.Label>
                            <Form.Control

                            type="text" 
                            value={twitchURL}
                            required
                            onChange={e => setTwitchURL(e.target.value)}
                            placeholder="Supply Twitch URL"

                            >

                            </Form.Control>

                            <Form.Label className="mt-3">
                                <h4>Promotion Selection <img src={twitterLogo} height="30"></img></h4>
                                </Form.Label>
                            <Form.Control 
                              as="select"
                              value={promoType}
                              required
                              onChange={e => setPromoType(e.target.value)}
                              placeholder="Promotion Type"
                              
                              >
                              <option>Choose...</option>
                              <option>Twitch</option>
                              <option>Twitter</option>
                            </Form.Control>

                        </Form.Group>
                        {message && <Alert className="Success text-center text-white mt-3">{message}</Alert>}
                        {!message &&  <Button disabled={loading} className="w-100" type="submit">Submit Promotion</Button>}
                    </Form>
                </Card.Body>
                

                <div>
                    <h5 className="text-center mb-3">Promotion Cost: $50.00</h5>
                </div>

                <div>
                    <h5 className="text-center mb-3">Promotions will be launched after payment is processed.</h5>
                </div>

                <div>
                    <h4 className="text-center">Promotions are ran from the Twitch Buds twitter account offering an incentive for the reward while promoting your content. <p className="mt-3"> Promotions are limited to only Twitch/Twitter promotion spots. </p> </h4>
                </div>
                <div className="">
                    <h3 className="text-center">Back to Dashboard</h3>
                    <Link to="/" className="btn btn-primary w-100 mt-3">
                        Dashboard
                    </Link>
                </div>
            </Card>
        </div>
        </>
    )
}
