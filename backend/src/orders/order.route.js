const express = require('express');
const { createAOrder} = require('./order.controller');


const router = express.Router();

//create an order endpoint

router.post("/", createAOrder);

//get orders by user email
// router.get("/email/:email",getOrderByEmail);





module.exports = router;