const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.post("/order", async (req, res) => {

    const cart =
        await axios.get(
            "http://localhost:5004/cart"
        );

    const payment =
        await axios.post(
            "http://localhost:5006/payment"
        );

    await axios.post(
        "http://localhost:5007/notify"
    );

    res.json({

        orderId: Date.now(),

        cart: cart.data,

        payment: payment.data

    });

});

app.listen(5005);
