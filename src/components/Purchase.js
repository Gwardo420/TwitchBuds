import React, { useRef, useState } from 'react'
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

        <div className="PromotionCard text-center">
            <Button className="m-1" onClick={dashboard}>Back to Dashboard</Button>    
            <Button className="m-1" onClick={about}>What is Twitch Buds?</Button>   
        </div>

        <div className="Card text-center">
            <h3 className="PromotionCard">Purchase a Promotion</h3>

            <div>Promotions are held on the Twitch Buds Twitter account and will be launched after your payment is cleared.</div>
            <div>Twitch Buds will launch your promotion and choose a winner as an incentive to promote your page.</div>

            <div>Scroll down to view Promotions Examples</div>

            <h3 className="PromotionCard mt-3 mb-3">
                Promotion Cost: $50.00
            </h3>
            
            <Paypal />
            <div className="PromotionCard">
                           
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

                <div className="mt-3">
                    <text>
                        Your promotion will offer a $25.00 incentive (50% commission) to promote your content. Twitch Buds will run the promotion and choose a winner.
                    </text>
                </div>

                <img></img>
                <img></img>

            </div>    

        </div>

        </>
    )
}
