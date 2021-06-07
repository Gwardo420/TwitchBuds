import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import './CSS/card.css';
import gwardo from './images/simpletwitch.png'

export default function Help() {
    const { login, twitter } = useAuth()
    const history = useHistory()

    setTimeout(() => {
        history.push('/login')
    }, 2000)

    return (
        <>
        <div className="text-center mt-3 text-white ">
            <img height="70" src={gwardo}></img>
            <h3>Welcome to Twitch Buds!</h3>
            <h3>Redirecting back to the homepage...</h3>
        </div>
        </>
    )
}
