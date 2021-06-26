import React, { useState, useEffect } from 'react'
import { Card, Button, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import firebase from '../firebase'
import toast, { Toaster } from 'react-hot-toast';

export default function Dashboard() {
    const [promotions, setPromotions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activated, setActivated] = useState(false);
    const [error, setError] = useState('')
    const [viewPromotions, setviewPromotions] = useState(false)
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

            
            toast('You signed out!', {
                icon: '👏',
            });

            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    function setPromotionsFunction() {
        setviewPromotions(true)
    }

    function hidePromotions() {
        setviewPromotions(false)
    }

    function handleSupport() {
        window.open("https://cash.app/$Twitchbuds")
    }

    async function handleTwitchBuds() {

        toast('We are next level streamer promotion!', {
            icon: '💻',
        });

        history.push('/help')
    }

    async function handleHomepage() {
        history.push('/login')
    }

    function handlePurchase() {

        toast('One step closer to promotion!', {
            icon: '💜',
        });

        history.push('/purchase')
    }

    function handleRetweetPicker() {
        history.push('/retweet-picker')
    }

    function handleContactForm() {
        history.push('/contact')
    }

    return (
        <>

        <div className="CardInfo mt-3 text-center">
        <img className="DashboardPicture mt-3" src={currentUser.photoURL || "https://www.valleyroadwines.com/wp-content/uploads/2013/04/Anon-Person.png"} height="60"></img>
            <h5 className="mt-3 mb-3">{currentUser.displayName ? <h5>Welcome to your Dashboard <p>{currentUser.displayName}</p></h5> : <h5>Signed in with Email {currentUser.email}</h5>}</h5>
            
            <div className="Card mt-3">
                <h5>Account Email:</h5>
                <div className="text-center mb-3"><strong>{currentUser.email}</strong></div>
                <Button variant="info" className="m-1 ButtonShadow LoginHeader" onClick={handleHomepage}>Homepage</Button>
                <Button variant="info" className="m-1 ButtonShadow LoginHeader" onClick={handleLogout}>Sign Out</Button>
                <Button variant="info" className="m-1 ButtonShadow LoginHeader" onClick={handleSupport}>Support Project</Button>
                <Button variant="info" className="m-1 ButtonShadow LoginHeader" onClick={handleTwitchBuds}>What is Twitch Buds?</Button>
            </div>
        </div>

        {promotions && (
            <>          
                {!viewPromotions && (
                    <>
                    <div className="Card text-center mt-3">
                        <h3>See your promotions</h3>
                        <Button className="ButtonShadow LoginHeader mb-3" onClick={setPromotionsFunction}>View your promotions</Button>  
                    </div>  
                </>
                )}    

                {viewPromotions && (
                    <>
                    <h5 className="text-center text-white mt-3"> Promotion's Purchased </h5>     

                    <div className="Card text-center d-grid">
                    <Button className="ButtonShadow LoginHeader" onClick={hidePromotions}>Hide Current Promotions</Button>    
                        {promotions.map((promos) => (
                            <Card className="PromotionCard text-center mt-3" id={promos.contactAddress}>
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
                            </Card>
                        ))}
                    </div>
                    </>
                )}

            </>
        )}

        
        <div className="mb-3 mt-3 Card">
            <h5 className="text-center">Please Note</h5>
            <div className="text-center">Promotional spots are held on the Twitch Buds Twitter account.</div>
            <div className="text-center mt-3">These spots offer an incentive reward for the community engaging in your content.</div>
        </div>

        <div className="Card mt-3">
            <h3 className="text-center text-white">Promotion Section</h3>
            <Card className="SubmitPromo mb-3 m-3">
                <Card.Body className="SubmitPromo">
                    {error && <Alert variant="danger">{error}</Alert>}
                    
                    <div className="PromotionCard mt-3 text-center">
                    <h4 className="text-center mt-3">Run a Promotion!</h4>
                    <Button variant="info" onClick={handlePurchase}>Purchase Promotion</Button>
                    </div>

                    <div className="PromotionCard mt-3 text-center">
                        <h3 className="text-center text-white">Use Retweet Picker</h3>
                        <Button variant="info" onClick={handleRetweetPicker}>Retweet Picker</Button>
                    </div>

                    <div className="PromotionCard mt-3 text-center">
                        <h3 className="mt-3 text-center text-white">Contact Twitch Buds</h3>
                        <Button variant="info" onClick={handleContactForm}>Contact Us</Button>
                    </div>

                </Card.Body>
            </Card>
        </div>

    </>
    )
}
