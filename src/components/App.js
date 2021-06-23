import React from 'react';
import Signup from './Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import PromotionForm from './PromotionForm';
import ContactTwitchBuds from './ContactTwitchBuds';
import RetweetChecker from './RetweetChecker';
import Creator from './Creator';
import Help from './Help';
import Purchase from './Purchase';
import Successful from './Successful';
import PurchaseSuccess from './PurchaseSuccess';
import TwitchBudsHeader from './images/header.png';
import toast, { Toaster } from 'react-hot-toast';
import ScrollToTop from './ScrollToTop';

function App() {
    return (
        <>
        <div className="Background">

        <img></img>    
        
        <Container className="d-flex align-items-center justify-content-center " style={{  minHeight: "100vh" }}>
                
            <div className="w-100 MarginNegative" style={{ maxWidth: "600px"}}>
            <Toaster />
                <Router>
                    <ScrollToTop />
                    <AuthProvider>
                        <Switch>
                            <PrivateRoute path="/purchase-success" component={PurchaseSuccess} />
                            <PrivateRoute path="/successful" component={Successful} />
                            <PrivateRoute path="/purchase" component={Purchase} />
                            <PrivateRoute path="/retweet-picker" component={RetweetChecker}/>
                            <PrivateRoute exact path="/" component={Dashboard} />
                            <PrivateRoute path="/update-profile" component={UpdateProfile}/>
                            <PrivateRoute path="/setup-promotion" component={PromotionForm} />
                            <Route path="/contact" component={ContactTwitchBuds} />
                            <Route exact path="/" component={Dashboard} />
                            <Route path="/help" component={Help} />
                            <Route path="/creator" component={Creator} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/login" component={Login} />
                            <Route path="/forgot-password" component={ForgotPassword} />
                        </Switch>
                    </AuthProvider>
                </Router>
            </div>
        </Container>
        </div>
        </>
    )
}

export default App