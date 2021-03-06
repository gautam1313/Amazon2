const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
//Use the secret key provide by your stripe account below
const stripe = require("stripe")("");

// API

//-- App Config
const app = express();

//-- Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//-- API routes
app.get("/", (request, response) => response.status(200).send("Welcome page"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request of >>>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
    description: "Software development services",
  });
  const customer = await stripe.customers.create({
    name: "Jenny Rosen",
    address: {
      line1: "510 Townsend St",
      postal_code: "98140",
      city: "San Francisco",
      state: "CA",
      country: "US",
    },
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//-- Listen Command
exports.api = functions.https.onRequest(app);
