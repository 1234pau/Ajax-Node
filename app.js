const express = require("express")
const app = express()
const bodyParse = require("body-parser")
const cors = require("cors")
const apiRouter = require('./api/apiRoute')

const hostname = '127.0.0.1';
const port = 3000;

const jsonParser = bodyParse.json();
const urlEncodedParser = bodyParse.urlencoded({ extended: false });
app.use(jsonParser);
app.use(urlEncodedParser);

app.use(cors())

app.use('/api', apiRouter)

app.get("/", (req, res) => {
    res.send("Hello from server")
})

app.listen(port, hostname, () => {
    console.log(`Express server is runing on http://${hostname}:${port}`)
})