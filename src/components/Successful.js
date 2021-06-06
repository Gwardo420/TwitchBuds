import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import './CSS/card.css';

export default function Help() {
    const { login, twitter } = useAuth()
    const history = useHistory()

    setTimeout(() => {
        history.push('/login')
    }, 2000)

    return (
        <>
        <div className="PromotionCard text-center mt-3 text-white ">
            <h3>You have successfully signed in!</h3>
            <h3>Redirecting you to the homepage...</h3>
        </div>

        </>
    )
}
