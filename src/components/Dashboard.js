import React, { useState, useEffect } from 'react'
import { Card, Button, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import firebase from '../firebase'

export default function Dashboard() {
    const [promotions, setPromotions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activated, setActivated] = useState(false);
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    const ref = firebase.firestore().collection('promotions').doc(currentUser.email).collection('submittions')

    function getPromotions() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            })
            if(items.length > 0){
                setPromotions(items)
                setLoading(false)
            } else {
                setPromotions()
                setLoading(false)
            }
        })
    }

    useEffect(() => {
        getPromotions()
    }, [])

    
    if(loading) {
        return <h3>Loading your dashboard!</h3>;
    }

    async function handleLogout() {
        setError('')

        try{
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    function handleSupport() {
        window.open("https://cash.app/$Twitchbuds")
    }

    async function handleTwitchBuds() {
        history.push('/help')
    }

    async function handleHomepage() {
        history.push('/login')
    }

    return (
        <>

        <div className="Card mt-3 text-center">
            <h3>{currentUser.displayName ? <h3>{currentUser.displayName}</h3> : <h3>Signed in with Email {currentUser.email}</h3>}</h3>
            <img className="Gwardo mt-3" src={currentUser.photoURL}></img>
        
            <div className="mb-3 mt-3">
                <Button className="m-1" variant="primary" onClick={handleHomepage}>Homepage</Button>
                <Button className="m-1" variant="danger" onClick={handleLogout}>Log Out</Button>
                <Button className="m-1" variant="success" onClick={handleSupport}>Support Project</Button>
                <Button className="m-1" variant="primary" onClick={handleTwitchBuds}>What is Twitch Buds?</Button>
            </div>   

        </div>

        {promotions && (
            <>                       
            <Card className="PromotionCard mt-3">
                <h3 className="text-center text-white mt-3"> Promotion's Purchased </h3> 
                    <Card.Body>
                    {promotions.map((promos) => (
                            <div className="PromotionCard text-center mt-3" id={promos.contactAddress}>

                                <Card.Title className="Card">
                                    <Card.Subtitle className="mb-2 text-white"><h5>Type: <strong>{promos.promotionType} Promotion </strong></h5></Card.Subtitle>
                                </Card.Title>
                                
                                <Card.Title className="Card">
                                    <h5>Twitch Username: <strong>{promos.twitchUsername}</strong></h5>
                                </Card.Title>
                                
                                <Card.Title className="Card">
                                    <h5>Time Length: <strong> {promos.promoLength} hours</strong></h5>

                                </Card.Title>
                                <Button  variant="success">Launch Promotion (Coming Soon)</Button>
                            </div>
                        ))}
                    </Card.Body>
                </Card>
            </>
        )}

        <div className="Card mt-3">
            <h3 className="text-center text-white">⬇️ Twitch Buds Services ⬇️</h3>
            <Card className="SubmitPromo mb-3 m-3">
                <Card.Body className="SubmitPromo">
                    {error && <Alert variant="danger">{error}</Alert>}
                    
                    <div className="PromotionCard mt-3">
                    <h4 className="text-center mt-3">Run a Promotion!</h4>
                    
                    <Link to="/purchase" className="btn btn-primary w-100 mt-3 mb-3">
                        Purchase Promotion
                    </Link>
                    </div>

                    <div className="PromotionCard mt-3">
                        <h3 className="text-center text-white">Use Retweet Picker</h3>
                        <Link to="/retweet-picker" className=" btn btn-primary w-100 mt-3 mb-3">
                            Retweet Picker
                        </Link>
                    </div>

                    <div className="PromotionCard mt-3">
                        <h3 className="mt-3 text-center text-white">Contact Twitch Buds</h3>
                        <Link to="/contact" className="btn btn-primary w-100 mt-3 mb-3">
                            Contact Form
                        </Link>
                    </div>

                    <div className="text-center text-white mt-3">
                        Currently signed in as {currentUser.displayName ? <h3>{currentUser.displayName}</h3> : <><h3>{currentUser.email}</h3>
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                        Update Email/Password
                        </Link></>}
                    </div>
                </Card.Body>
            </Card>
        </div>

        <div className="mb-3 mt-3 Card">
            <h4 className="text-center">Please Note:</h4>
            <h3 className="text-center">Promotional spots are held on the Twitch Buds Twitter account.</h3>
            <h3 className="text-center mt-3">These spots offer an incentive reward for the community engaging in your content.</h3>
        </div>

    </>
    )
}
