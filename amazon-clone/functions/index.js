const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")('sk_test_51JktZASFKtBY7rcSDKGKp0j0D9JrBRQ3sFDk4VrH6DcExyIEfLkBdYtcLDdCaBbYo1sxpocC0zDjVhHKTXPS0K8z00OvZ8ybh8');

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/",(request,response) => response.status(200).send ('hello world'))

app.post("/payments/create",async (request,response) => {
    const total = request.query.total;
    console.log("Payment request recieved",total);

    const paymentIntent = await stripe.paymentIntents.create({
          amount: total,
          currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// http://localhost:5001/fir-e0f1a/us-central1/api  link

exports.api =functions.https.onRequest(app)