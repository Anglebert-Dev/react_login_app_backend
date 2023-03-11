const cookieSession = require('cookie-session')
const express = require('express')
const passport = require('passport')
const cors = require('cors')
require('dotenv').config()



const app = express()
app.use(cookieSession(
    {
        name:"session",
        keys:["maka"],
        maxAge:process.env.COOKIE_AGE
    }
))

app.use(passport.initialize())
app.use(passport.session())
app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,DELETE,PUT",
    credentials:true
}))



const PORT = process.env.PORT || 2000
app.listen(PORT , ()=>{
    console.log(`server listening on ${PORT} ` );
})