require('dotenv').config
const router = require('express').Router()
const passport = require('passport')

router.get('/login/succes' , (req,res)=>{
    if(req.user){
        res.status(200).json({
            success:true,
            message:"successful",
            user:req.user,
            // cookie:req.cookies
        })
    }
})

router.get("/login/failed" , (req,res)=>{
    res.status(401).json({
        success:false,
        message:"failure"
    })
})

// logout API
router.get("/logout", (req,res)=>{
    req.logout()
    res.redirect(process.env.CLIENT_URL)
})

router.get("/google", passport.authenticate("google", {scope:["profile"]}))  
router.get(
    "/google/callback" , 
    passport.authenticate("google" ,{
        successRedirect:process.env.CLIENT_URL,
        failureRedirect:"/login/failed"
    }))

module.exports = router