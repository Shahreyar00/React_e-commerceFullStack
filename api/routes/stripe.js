const router = require("express").Router();
const dotenv = require("dotenv");
dotenv.config();

// const KEY = "sk_test_51K4iDCSIiAQujQFFntOnpRLEWKYNtnbSECYpQNGKMKo6XEN8d3fVBuYX7O7wabb4ne2PchrJWgA47H44S0HxU7Qj00n9eTaNLn"
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")(KEY);

router.post("/payment", (req,res)=>{
    stripe.charges.create(
        {
            source: req.body.tokenId, 
            amount: req.body.amount, 
            currency: "inr",
        },
        (stripeErr, stripeRes) =>{
            if(stripeErr){
                res.status(500).json(stripeErr);
            }else{
                res.status(200).json(stripeRes);
            }
        }
    )
});

module.exports = router;