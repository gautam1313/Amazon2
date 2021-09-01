const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JU8nYSB5w0t6SXMPkO7DOOjJ2nqBBwRyyzTzYQ0zbQDs7jxURjGoCNQxAp87re1tB2owPinS3FzGT46KO4fMqu4001MH0xiX8"
);

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
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//-- Listen Command
exports.api = functions.https.onRequest(app);
