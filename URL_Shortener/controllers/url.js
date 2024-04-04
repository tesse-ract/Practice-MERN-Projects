const shortid = require("shortid");
const URL =require('../models/url.js');

async function handleGenerateNewShortURL(req,res){
    console.log("hello");
    const body=req.body;
    if(!body.url) return res.status(400).json({error: "url is required"});
    const shortID=shortid.generate();
    await URL.create({
        shortId:shortID,
        redirectURL:body.url,
        visitHistory:[],
    });

    return res.json({id: shortID});
}

async function handleGetAnalytics(req,res){
    const shortId=req.params.shortid;
    const result=await URL.findOne({shortId});
    return res.json({
        totalClicks:result.visitHistory.length,
        analytics:result.visitHistory,
    });
}

async function handleRedirectURL(req,res){
    const shortId=req.params.shortId;
    const entry=await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push:{
                visitHistory: {
                    timestamp : Date.now(),
                }
            }
        }
    );

    res.redirect(entry.redirectURL);
}

module.exports={handleGenerateNewShortURL,handleGetAnalytics,handleRedirectURL}