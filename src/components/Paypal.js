import React, { useRef, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

export default function Paypal() {

    const [purchase, setPurchase] = useState(false)
    const history = useHistory()
    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE", 
                    purchase_units: [
                        {
                            description: "Twitch Buds Promotion Service", 
                            amount: {
                                currency_code: "USD",
                                value: 50.00
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                setPurchase(true)
                
                history.push('/purchase-success')

            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    })

    return (
        <div className="Description">
            {purchase && (
                <div>
                    <h3>
                        Your Purchase Was Successful!
                    </h3>
                    <h3>
                        Thank you for choosing Twitch Buds!
                    </h3>
                    <h3 className="PromotionCard m-3 mt-3 mb-3">
                        You will be redirected back to Twitch Buds in a few seconds!
                    </h3>
                    </div>
            )}
            {!purchase && (
                <div ref={paypal}></div>
            )}

        </div>
    )
}
