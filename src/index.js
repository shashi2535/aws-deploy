const express = require("express")
require("./config/db")
const{todoRouter} = require("./router")
const port = 8000
const app = express()

app.use(express.json())
app.use("/api", todoRouter)
app.listen(port,()=>{
    console.log(`server listening on ${port}`)
})