const express=require("express");
const {handleGenerateNewShortURL,handleGetAnalytics,handleRedirectURL}=require("../controllers/url.js");

const router=express.Router();

router.post('/',handleGenerateNewShortURL);
router.get('/analytics/:shortid',handleGetAnalytics)
router.get('/:shortId',handleRedirectURL)


module.exports= router;