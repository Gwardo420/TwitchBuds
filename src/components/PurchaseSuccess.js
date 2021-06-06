import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import './CSS/card.css';
import twitchpng from './images/Twitch Buds Twitter (1).png'
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed'

export default function PurchaseSuccess() {
    const { login, twitter } = useAuth()
    const history = useHistory()

    setTimeout(() => {
        history.push('/setup-promotion')
    }, 5000)

    return (
        <>
        <div className="text-center mt-3 text-white">
            
            <div className="PromotionCard mb-3 mt-3">
                <img className="Gwardo" height="100" src={twitchpng}></img>
                <h3>
                   Thank you for your purchase!
                </h3>
            </div>

        </div>

        </>
    )
}
