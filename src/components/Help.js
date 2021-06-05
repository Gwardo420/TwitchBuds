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
            

            <img className="Gwardo" height="100" src={twitchpng}></img>
            <h1 className="mt-3">Simple Streamer Promotion</h1>
            <div className="PromotionCard">
                <Button className="m-1" onClick={handleSumbit}>Return To Dashboard</Button>
                <Button className="m-1" onClick={meetCreator}>Twitch Buds Creator</Button>
            </div>


            <div className="Card mt-3 mb-3">
                <h3 className='mt-3'>
                    How does this work?
                </h3>

                <div className="text-white text-center mb-3">
                    Twitch Buds was created by Gwardo420 to help streamers around the world promote their content on a different level than usual. While keeping the small streamer in mind, Twitch Buds offers promotional spots on Twitter to help increase your exposure.
                </div>
             </div>

             <div className="Card mt-3 mb-3 text-center">
                <h3 className='mt-3'>
                    Promotional Examples
                </h3>

                <div>
                    These are a couple examples of Twitch Buds promotional spots that we offer you. Instead of "Must be following @TwitchBuds" it will be your username. 
                    <p>These promotions help you grow your community while giving back at the same time.</p>
                    <p>The incentive for your promotion spot will be 50% of the promotional cost.</p>
                    <p>Twitch Buds will handle everything from choosing a winner to paying out the winner after your promotion has ended.</p>
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

                
            <div className="Card mt-3 mb-3">
                <h3 className='mt-3'>
                    How-To Apply
                </h3>

                <div className="text-white text-center mb-3">
                    You can return to your Dashboard and click "Apply for Promotion" this will give you a form to enter your promotion credentials. 
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
