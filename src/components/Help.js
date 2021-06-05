import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import './CSS/card.css';
import twitchpng from './images/Twitch Buds Twitter (1).png'
import twitterPNG from './images/twitter.png'
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed'

export default function Help() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, twitter } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSumbit(e) {
        e.preventDefault()

        try {
        
            setError('')
            setLoading(true)
            history.push('/')
        
        } catch {
        
            setError('Failed to log in')
        
        }

        setLoading(false)

    }

    function meetCreator() {
        history.push('/creator')
    }


    return (
        <>
        <div className="text-center mt-3 text-white">
            
            <div>
                <img className="Gwardo" height="100" src={twitchpng}></img>
             <h1 className="mt-3">Simple Streamer Promotion</h1>
             <div className="Card">
                <Button className="Card m-1" onClick={handleSumbit}>Return To Dashboard</Button>
            </div>
            </div>

            <div className="Card mt-3 mb-3">
                <h3 className='mt-3'>
                    How does this work?
                </h3>

                <div className="text-white text-center mb-3">
                    Twitch Buds was created by Gwardo420 to help streamers around the world promote their content on a different level than usual. While keeping the small streamer in mind, Twitch Buds offers promotional spots on Twitter to help increase your exposure.
                </div>
             </div>

             <div className="Card mt-3 mb-3">
                <h3 className='mt-3'>
                    Promotional Examples
                </h3>

                <div>
                    These are a couple examples of Twitch Buds promotional spots that we offer you. Instead of "Must be following @TwitchBuds" it will be your username. 
                    <p>These promotions help you grow your community while giving back at the same time.</p>
                    <p>The incentive for your promotion spot will be 50% of the promotional cost.</p>
                    <p>Twitch Buds will handle everything from choosing a winner to paying out the winner after your promotion has ended.</p>
                </div>

                <TwitterTweetEmbed 
                    // Here goes your copied ID.
                    tweetId={"1384855254739693571"} 
                    // Style options goes here:
                    optins={{width: "900px"}} 
                />

                <TwitterTweetEmbed 
                    // Here goes your copied ID.
                    tweetId={"1384492299577610240"} 
                    // Style options goes here:
                    optins={{width: "900px"}} 
                />

                </div>

                
            <div className="Card mt-3 mb-3">
                <h3 className='mt-3'>
                    How-To Apply
                </h3>

                <div className="text-white text-center mb-3">
                    You can return to your Dashboard and click "Apply for Promotion" this will give you a form to enter your promotion credentials. 
                </div>
             </div>


            <div className="Card">
                <Button className="Card m-1" onClick={handleSumbit}>Return To Dashboard</Button>
            </div>

        </div>

        </>
    )
}
