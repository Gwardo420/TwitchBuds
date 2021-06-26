import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import './CSS/card.css';
import gwardo from './images/gwardo.png';

export default function Creator() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, twitter } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

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

    async function dashboard(e) {
        e.preventDefault()
        setLoading(true)

        try {

            history.push('/')
        
        } catch {
        
            setError('Failed to log in')
        
        }

        setLoading(false)

    }

    async function about() {
        history.push('/help')
    }

    return (

        <>
        <div className="PromotionCard text-center">

            <Button variant="info" className="m-1 ButtonShadow LoginHeader" onClick={dashboard}>Back to Dashboard</Button>    
            <Button variant="info" className="m-1 ButtonShadow LoginHeader" onClick={about}>What is Twitch Buds?</Button>   

        </div>
        <div className="text-center Card">

            <h4>Hi, I am Gwardo420</h4>
             
            <div className="mb-3 mt-3">
                <img className="Gwardo" src={gwardo}></img>
            </div>
        
            <div className="mt-3">
                <h5 className="PromotionCard">About Me</h5>
                <div className="mt-2">
                    I am a self taught software engineer that wants to help smaller streamers grow their content at a whole new level.
                </div>
            </div>
            
            <div className="mt-3">
                <h5 className="PromotionCard">Why Twitch Buds?</h5>
                <div className="mt-2 mb-2">
                    I created this just to see how far I could take my coding skills.
                </div>
            </div>

            <p className="text-bold">Thank you for checking out Twitch Buds</p>
            

        </div>

        <div className="PromotionCard text-center">
            <div>
                <h3>Check out my other projects</h3>
            </div>
            <Button variant="info" className="m-1 ButtonShadow LoginHeader" onClick={cryptoWatchr}>CryptoWatchr</Button>
            <Button variant="info" className="m-1 ButtonShadow LoginHeader" onClick={cluChart}>CluChart</Button>
            <Button variant="info" className="m-1 ButtonShadow LoginHeader" onClick={cluBot}>CluBot</Button>
            <Button variant="info" className="m-1 ButtonShadow LoginHeader" onClick={linkedIn}>LinkedIn</Button>
        </div>

        </>
    )
}
