const express = require('express');

const router = express.Router();

const packageDetails_query = require('../../Database/packageDetails_query');


//routes for rendering locationDetails page
router.get('/SeeMoreDetails/:locationId' , async(req,res)=>{
    if(req.user == null)
    {
        res.redirect('/login');
    }
    else{
        const locationId = req.params.locationId;
        res.render('locationDetails',{locationId});
    }
});


//route for locationDetails 
router.get('/locationDetails/:locationId' , async(req,res)=>{
    if(req.user == null)
    {
        res.redirect('/login');
    }
    else{
        const locationId = req.params.locationId;
        
        let details =  await packageDetails_query.getDetailsOfLocation(locationId);

        if(details == undefined)
        {
            return null;
        }
        else{
            return res.json(details);
        }
    }
});

//route for locationDetails 
router.get('/comments/:locationId' , async(req,res)=>{
    if(req.user == null)
    {
        res.redirect('/login');
    }
    else{
        const locationId = req.params.locationId;
        let comments = await packageDetails_query.getCommentsOfLocation(locationId);

        if(comments == undefined)
        {
           return null;
        }
        else{
            return res.json(comments.rows);
        }
    }
});


module.exports = router;