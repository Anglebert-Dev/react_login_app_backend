const cookieSession = require('cookie-session')
const express = require('express')
const passport = require('passport')
require('./src/middlewares/passport')
const cors = require('cors')
const authRoutes = require('./src/routes/auth')
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

// routes
app.use('/auth',authRoutes)

const PORT = process.env.PORT || 2000
app.listen(PORT , ()=>{
    console.log(`server listening on ${PORT} ` );
})