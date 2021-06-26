import React, { useRef, useState, useEffect } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import './CSS/card.css';
import Paypal from './Paypal'
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed'

export default function Purchase() {

    const history = useHistory()

    async function dashboard() {
        history.push('/')
    }

    async function about() {
        history.push('/help')
    }

    function GotoPromotion1() {
        window.open('https://twitter.com/TwitchBuds/status/1384855254739693571?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1384855254739693571%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=http%3A%2F%2Flocalhost%3A3000%2Fhelp')
    }

    function GotoPromotion2() {
        window.open('https://twitter.com/TwitchBuds/status/1384492299577610240?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1384492299577610240%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=http%3A%2F%2Flocalhost%3A3000%2Fhelp')
    }

    return (

        <>
        <div className="PromotionCard text-center mt-5">
            <Button className="m-1" onClick={dashboard}>Back to Dashboard</Button>    
            <Button className="m-1" onClick={about}>What is Twitch Buds?</Button>   
        </div>

        <div className="Card text-center mb-3">

        <h3 className="SimplePromotions text-center text-white">Purchase 48 Hour Promotion ($50.00)</h3>
        <div className=" m-3">
            <text>
                All Promotions are ran after the payment has been cleared!
            </text>
                <Paypal />
            </div> 
            
            <div className="Description mt-3 mb-3">
                    <h3 className="SimplePromotions">➡️ How This Works ⬅️</h3>
                    <h5>
                        Offering an incentive to grow your Twitch page or Twitter page. Each promotion will offer a reward for retweeting & follow your Twitch or your Twitter. This will help another streamer while helping you grow your social media or content creation. 
                    </h5>
                </div>
            <div className="Description">(You can see examples down below!)</div>

            <div className="Description PromotionCard mt-3 mb-3">
            <h3 className="SimplePromotions">Your Promotion Example</h3>
                <div className="">
                    <text>
                        I will give a random user 2,000 bits (or $25) that retweets this and follows (your_handle) in the next 48 hours!
                    </text>    
                </div>            
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

        </div>


        </>
    )
}
