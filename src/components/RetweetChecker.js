import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { database } from '../firebase'
import './CSS/card.css';
import { TwitterClient } from 'twitter-api-client';
var cors = require('cors')

export default function RetweetChecker() {

    const { currentUser, email } = useAuth()
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [tweet, setTweet] = useState("")
    const [winner, setWinner] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()

        //const data = await twitterClient.tweets.statusesRetweetsById({ id: `1400788836700114944`, count: 25,})
        //console.log(data)

        setLoading(true)
        setDisabled(true)
    }

    //{!loading && (
    //    <Button className="mt-3" disabled={disabled} onClick={handleSubmit}>Pick Winner</Button>
    //)}
//
    //{loading && (
    //    <h4 className="mt-3">This feature is coming soon!</h4>
    //)} 

    return (
        <>
        <div className="Card">
            <Card className="Card">
                <Card.Body>
                    <h2>Twitch Buds Retweet Picker</h2>
                    <h2>Coming Soon!</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label className="mt-3">
                                Tweet ID
                            </Form.Label>

                            <Form.Control

                            type="text" 
                            required
                            value={tweet}
                            onChange={e => setTweet(e.target.value)}
                            placeholder="Supply Tweet ID"

                            >

                            </Form.Control>
                        </Form.Group>

                        <Button className="mt-3" disabled={true} onClick={handleSubmit}>Coming Soon</Button>

                    </Form>
                </Card.Body>
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
