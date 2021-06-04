import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import './CSS/card.css';
import gwardo from './images/gwardo.png'
import discord from './images/discord.png'
import twitter from './images/twitter.png'

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

    return (

        <>
        <div>
            <Button className="m-1" onClick={dashboard}>Back to Dashboard</Button>    
        </div>
        <div className="text-center Card">
             <h3 className="mt-3 mb-3">Meet The Creator</h3> 
             <div className="mb-3 mt-3">
                 <img className="Gwardo" src={gwardo}></img>
             </div>
             <h4>Hi, I am Gwardo420</h4>
             <text className="mt-2">
                I am a self taught software engineer that wants to help smaller streamers grow their content at a whole new level.
            </text>
            <div className="mt-2 mb-2">
                I created this just to see how far I could take my coding skills.
            </div>
            <p className="text-bold">Thank you for checking out Twitch Buds</p>
            <div>
                <h3>Check out my other projects</h3>
            </div>
            <Button className="m-1" onClick={cryptoWatchr}>CryptoWatchr</Button>
            <Button className="m-1" onClick={cluChart}>CluChart</Button>
            <Button className="m-1" onClick={cluBot}>CluBot</Button>
            <Button className="m-1" onClick={linkedIn}>LinkedIn</Button>
        </div>

        </>
    )
}
