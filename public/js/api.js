const express = require("express");
const router = express.Router();

router.post("/user", function(req,res){
    session = req.session;
    session.userid = req.body.username;
    console.log(session);

    res.send({
        type: "POST",
        email: res.body.email,
    });
});

module.exports = router;