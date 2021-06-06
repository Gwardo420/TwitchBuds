import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { database } from '../firebase';
import './CSS/card.css';

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

    function handleSubmit(e) {
        e.preventDefault()

        setLoading(true)

        database.promotion.doc(currentUser.email).collection("submittions").add({
            promoName: twittername,
            twitchUsername: twitchName,
            promoLength: 24,
            userEmail: currentUser.email,
            promotionType: promoType,
            paid: "false",
            acitvated: "false"
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
        <div className="Card">
            <Card className="Card">
                <Card.Body>
                    <h2>Submit A Promotion</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                        <Form.Label className="mt-3">
                                Twitter Username
                            </Form.Label>
                            <Form.Control

                            type="text" 
                            value={twittername}
                            onChange={e => setTwittername(e.target.value)}
                            placeholder="Supply Twitter Username"

                            >

                            </Form.Control>

                            <Form.Label className="mt-3"> 
                                Twitch Username
                            </Form.Label>
                            <Form.Control

                            type="text" 
                            required
                            value={twitchName}
                            onChange={e => setTwitchName(e.target.value)}
                            placeholder="Supply Twitch Name"

                            >
                                
                            </Form.Control>

                            <Form.Group>
                              <Form.Label>Social Promotion</Form.Label>
                              <Form.Control 

                                as="select"
                                value={promoType}
                                onChange={e => setPromoType(e.target.value)}
                                placeholder="Promotion Type"
                                
                                >
                                <option>Choose...</option>
                                <option>Twitch</option>
                                <option>Twitter</option>
                              </Form.Control>
                            </Form.Group>

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
