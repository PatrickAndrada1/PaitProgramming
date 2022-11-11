const express = require("express")
const app = express()
const port = 3000
const router = require("./routers/index")

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))
app.use("/", router)
// app.use(session({
//     secret: 'hehehe',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         secure: false,
//         sameSite: true
//     }
// }))

app.listen(port, ()=>{
    console.log(`app on port 3000`)
})