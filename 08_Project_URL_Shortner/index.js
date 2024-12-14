const express = require('express')
const {  connectToMongoDB} = require('./connect')
const URL = require('./models/url')
const urlRoute = require('./routes/url')

const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://127.0.0.1:27017/short-url').then(() => {
    console.log("MonogDb Connected")
});

app.use(express.json())

app.use('/url', urlRoute);

app.get('/:shortID', async (req, res) => {
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate({
        shortID
    }, { $push: {
        visitHistory: {
            timeStamps: Date.now(),
        },
    }, });
    res.redirect(entry.redirectURL);
})
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))