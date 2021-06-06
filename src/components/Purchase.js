import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import './CSS/card.css';
import gwardo from './images/gwardo.png'
import discord from './images/discord.png'
import twitter from './images/twitter.png'
import Paypal from './Paypal'

export default function Purchase() {

    const history = useHistory()

    async function dashboard() {
        history.push('/')
    }

    async function about() {
        history.push('/help')
    }

    return (

        <>

        <div className="PromotionCard text-center">
            <Button className="m-1" onClick={dashboard}>Back to Dashboard</Button>    
            <Button className="m-1" onClick={about}>What is Twitch Buds?</Button>   
        </div>

        <div className="Card text-center">
            <h3>Purchase a Promotion</h3>

            <h5>Promotions are held on the Twitch Buds Twitter account and will be launched after your payment is cleared.</h5>
            <h5>Twitch Buds will launch your promotion and choose a winner as an incentive to promote your page.</h5>
            
            <h3 className="PromotionCard mt-3 mb-3">
                Promotion Cost: $50.00
            </h3>
            
            <Paypal />
        </div>

        </>
    )
}
