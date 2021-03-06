const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PORT = 8080;
const app = express();
const MONGODB_URI = "mongodb://localhost:27017/demo"

app.use(bodyParser.json())
app.use('/bounties', require("./routes/bounties"))

app.use((req, res) => {
    res.status(400).send({message: "Bad Request"})
})

mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
.then(db => console.log("Connected to MongoDB"))
.catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));