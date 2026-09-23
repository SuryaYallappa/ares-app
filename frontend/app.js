//express app that serves html files

var express=require('express');
var app=express();

app.set('view engine','ejs');

const URL=process.env.BACKEND_URL || 'http://localhost:8000/api';

const fetch=(...args)=>
    import('node-fetch').then(({default: fetch})=>fetch(...args));

app.get('/',async (req,res)=>{
    const options={
        method:'GET',
    };
    try{
        let response=await fetch(URL,options);
        response=await response.json();
        console.log(response);
        res.render('index',response)
    }catch(err){
        console.log('error',err);  
        res.status(500).json({msg:'internal server error' })
    }
});

app.listen(3000, function() {
    console.log('Ares listeining on port 3000!')
}); 
