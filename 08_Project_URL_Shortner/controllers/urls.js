const { nanoid } = require('nanoid');
const URL = require('../models/url.js')

const handleGeneraterShortURL = async (req, res) => {
    const body = req.body;
    if(!body.url) return res.status(400).json({error: 'url is required'})
    const shortID = nanoid(8);
    await URL.create({
        shortID: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    return res.json({ id: shortID })
};

const handleGetAnalytics = async (req, res) => {
    const shortId = req.params.shortID;
    const result = await URL.findOne({ shortId })
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    })
};

module.exports = {
    handleGeneraterShortURL,
    handleGetAnalytics
}