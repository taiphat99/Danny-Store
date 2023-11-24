import React from "react";


import { PayPalButtons } from "@paypal/react-paypal-js";
import { addToOrder } from "../../service/OrderService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Paypal({ propData1, username }) {
    const navigate = useNavigate();

    return (
        <>
            <PayPalButtons
                createOrder={(data, actions, err) => {
                    const price = parseFloat(propData1);
                    const priceUsd = parseInt(price / 23000);
                    return actions.order.create({

                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Cool looking table",
                                amount: {
                                    currency_code: "USD",
                                    value: priceUsd,
                                },
                            },
                        ],
                    });

                }}
                onApprove={async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);
                    addToOrder(username);
                    // window.location.reload()
                    navigate('/home')
                    toast.success("Thanh toán thành công!", { delay: 700 })
                }
                }
                onError={(err) => {
                    console.log(err);
                }}
            />
        </>
    );
}