import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { database, serverTimestamp } from '../firebase'
import './CSS/card.css';

export default function ContactTwitchBuds() {

    const { currentUser } = useAuth()
    const [loading, setLoading] = useState(false)
    const [discordId, setDiscordId] = useState("")
    const [twitterName, setTwitterUsername] = useState("")
    const [contactEmail, setContactEmail] = useState("")
    const [question, setQuestion] = useState("")
    const [message, setMessage] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {

        e.preventDefault()
        setLoading(true)
        setMessage('Submission Successful! Returning you to your Dashboard if you are signed in.')
        
        setTimeout(() => {
            database.contactForms.doc("Contact").collection("Users Contact").add({
                question: question,
                contactAddress: contactEmail,
                twitterUsername: twitterName || "Not Supplied",
                discordUsername: discordId || "Not Supplied",
                createdAt: serverTimestamp()
            })
        }, 2000)

        setContactEmail("")
        setQuestion("")
        setDiscordId("")
        setTwitterUsername("")

        setTimeout(() => {
            history.push('/')
        }, 2000)

    }

    return (
        <>
        <h1 className="ButtonShadow LoginHeader text-white text-center">Contact TwitchBuds Directly</h1>
        <div className="Card">
            <Card className="Card">
                <h3 className="text-center">Contact Form</h3>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                        <Form.Label className="mt-3">
                                What is your contact email?
                            </Form.Label>
                            <Form.Control

                            type="email" 
                            value={contactEmail}
                            onChange={e => setContactEmail(e.target.value)}
                            placeholder="Supply your Email"

                            >

                            </Form.Control>

                            <Form.Label className="mt-3"> 
                                Question / Feedback
                            </Form.Label>
                            <Form.Control

                            type="text" 
                            required
                            value={question}
                            onChange={e => setQuestion(e.target.value)}
                            placeholder="Supply a question/concern"

                            >
                                
                            </Form.Control>

                            <Form.Label className="mt-3"> 
                                Discord Username
                            </Form.Label>
                            <Form.Control

                            type="text" 
                            value={discordId}
                            onChange={e => setDiscordId(e.target.value)}
                            placeholder="Discord Username (Optional)"

                            >
                                
                            </Form.Control>

                            <Form.Label className="mt-3"> 
                                Twitter Username
                            </Form.Label>
                            <Form.Control

                            type="text" 
                            value={twitterName}
                            onChange={e => setTwitterUsername(e.target.value)}
                            placeholder="Twitter Username (Optional)"

                            >
                                
                            </Form.Control>
                            

                        </Form.Group>
                        {message && <Alert className="Success text-center text-white" variant="success">{message}</Alert>}
                        {!message && <Button disabled={loading} className="w-100 ButtonShadow LoginHeader" type="submit">Submit</Button>}
                    </Form>
                </Card.Body>
            <div>
                <h4 className="text-center">This is a contact form that will get you in touch directly with the creator of Twitch Buds.</h4>
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
