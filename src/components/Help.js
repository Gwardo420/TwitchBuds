import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import './CSS/card.css';
import twitchpng from './images/Twitch Buds Twitter (1).png'
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed'

export default function Help() {
    const { login, twitter } = useAuth()
    const history = useHistory()

    async function handleSumbit(e) {
        e.preventDefault()

        try {
        
            history.push('/')
        
        } catch {
        

        }
    }

    function meetCreator() {
        history.push('/creator')
    }

    function GotoPromotion1() {
        window.open('https://twitter.com/TwitchBuds/status/1384855254739693571?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1384855254739693571%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=http%3A%2F%2Flocalhost%3A3000%2Fhelp')
    }

    function GotoPromotion2() {
        window.open('https://twitter.com/TwitchBuds/status/1384492299577610240?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1384492299577610240%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=http%3A%2F%2Flocalhost%3A3000%2Fhelp')
    }


    return (
        <>
        <div className="text-center mt-3 text-white">
            
            <h1 className="mt-3">Simple Streamer Promotion</h1>
            <div className="PromotionCard">
                <Button className="m-1" onClick={handleSumbit}>Return To Dashboard</Button>
                <Button className="m-1" onClick={meetCreator}>Twitch Buds Creator</Button>
            </div>


            <div className="Card mt-3 mb-3">
                <h3 className='mt-3'>
                    Our Goal
                </h3>

                <h5 className="text-white text-center mb-3">
                   Simple Streamer Promotions
                </h5>
             </div>

             <div className="Card mt-3 mb-3 text-center">
                <h3 className='mt-3'>
                    Twitch Buds Promotion Guide
                </h3>

                <div>(More screenshots are coming soon)</div>

                <div className="PromotionCard">
                    <h5>1. Sign-In With Twitter</h5>
                    <div>This just takes a few seconds. The account that you sign in with will be the account that is promoted.</div>
                </div>

                <div className="PromotionCard">
                    <h5>2. Apply for Promotion</h5>
                    <div>In your dashboard you can apply for a promotional spot on Twitch Buds Twitter account.</div>
                </div>

                <div className="PromotionCard">
                    <h5>3. Run Promotion</h5>
                    <div>Specify when you would like your promotion to run. Twitch Buds will handle running your promotion at your specified time.</div>
                </div>

                <div className="PromotionCard">
                    <h5>4. Gain Exposure</h5>
                    <div>After your promotion is ran, you can just sit back and let Twitch Buds handle the rest.</div>
                </div>

                <div>
                    See Example Promotions
                </div>

                <div className="d-grid justify-content-center align-items-center">
                    <h3>Promotion Example #1</h3>
                    <TwitterTweetEmbed 
                    // Here goes your copied ID.
                    tweetId={"1384855254739693571"} 
                    theme="dark"
                />
                <Button onClick={GotoPromotion1}>View This Tweet</Button>
                </div>

                <div className="d-grid justify-content-center align-items-center mt-3">
                    <h3>Promotion Example #2</h3>
                    <TwitterTweetEmbed 
                    // Here goes your copied ID.
                    tweetId={"1384492299577610240"} 
                    theme="dark"
                />
                <Button onClick={GotoPromotion2}>View This Tweet</Button>
                </div>

                </div>


            <div className="PromotionCard mb-3">
                <Button variant="primary" className="m-1" onClick={handleSumbit}>Return To Dashboard</Button>
                <Button className="m-1" onClick={meetCreator}>Twitch Buds Creator</Button>
            </div>

        </div>

        </>
    )
}
