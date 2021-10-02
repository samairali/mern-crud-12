const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://samair:samair1234@cluster0.ynzu1.mongodb.net/anotherDatabase?retryWrites=true&w=majority").then(() => {
    if (process.env.NODE_ENV === "production") {
        const path = require("path")
        app.use(express.static('client/build'))
        app.get('/*', (req, res) => {
            res.sendFile(process.env.PWD + '/client/build/index.html')
        })
    }
    app.listen(port, () => {
        console.log("working at port 5000");
        console.log(__dirname);
    })
})
app.use("/posts", require('./routes/post'));


