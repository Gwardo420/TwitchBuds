import React from 'react'
import Signup from './Signup'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import PromotionGiveaway from './PromotionGiveaway'
import ContactTwitchBuds from './ContactTwitchBuds'
import RetweetChecker from './RetweetChecker'
import Creator from './Creator'
import Help from './Help'

function App() {
    return (
        <>
        <div className="Background">
        <Container className="d-flex align-items-center justify-content-center" 
            style={{  minHeight: "100vh" }}>
                
            <div className="w-100" style={{ maxWidth: "600px"}}>
                <Router>
                    <AuthProvider>
                        <Switch>
                            <PrivateRoute path="/retweet-picker" component={RetweetChecker}/>
                            <PrivateRoute exact path="/" component={Dashboard} />
                            <PrivateRoute path="/update-profile" component={UpdateProfile}/>
                            <PrivateRoute path="/setup-promotion" component={PromotionGiveaway} />
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