import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { database } from '../firebase'
import { Timestamp } from 'firebase/firestore';
import './CSS/card.css';

export default function ContactTwitchBuds() {

    const { currentUser } = useAuth()
    const [loading, setLoading] = useState(false)
    const [discordId, setDiscordId] = useState("")
    const [contactEmail, setContactEmail] = useState("")
    const [question, setQuestion] = useState("")
    const [message, setMessage] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        database.contactForms.doc(currentUser.email).collection("submittions").add({
            question: question,
            userEmail: currentUser.email,
            contactAddress: contactEmail
        })

        setContactEmail("")
        setQuestion("")
        setDiscordId("")
        setMessage('Submission was successful!')

    }

    return (
        <>
        <div className="Card">
            <Card className="Card">
                <Card.Body>
                    <h2>Contact Twitch Buds</h2>
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
                                Question
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
                            required
                            value={discordId}
                            onChange={e => setDiscordId(e.target.value)}
                            placeholder="Discord Username (Optional)"

                            >
                                
                            </Form.Control>
                            

                        </Form.Group>
                        {message && <Alert className="Success text-center text-white" variant="success">{message}</Alert>}
                        {!message && <Button disabled={loading} className="w-100" type="submit">Submit Promotion</Button>}
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
