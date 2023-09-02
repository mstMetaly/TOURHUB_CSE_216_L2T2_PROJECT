const express=require("express");

const router=express.Router();

router.get('/home',(req,res)=>{
    if(req.user == null)
    {
        console.log("home --req.user null astese");
        
        res.redirect('/login');
    }
    else{
        res.render('home',
        {
            errors:[]
        });
    }
    
});

module.exports= router;