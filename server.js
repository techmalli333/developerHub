const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const cors = require('cors')
const review = require('./reviewmodel');
const middleware = require('./middleware');
const devuser = require('./devusermodel');
const { status } = require('express/lib/response');

mongoose.connect('mongodb+srv://lee:lee@cluster0.smbyn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(
    ()=> console.log('DB is connected')
).catch(err => console.log(err));

app.use(cors({origin:'*'}));
app.use(express.json()) // Cannot destructure property 'fullname' of 'req.body' as it is undefined.

app.get('/',(req,res)=>{
    return res.send("hello user")
}) 

app.post('/register', async(req,res) => {
    try{
        const {fullname, email, mobile, skill, password, confirmpassword} = req.body; 
        const exit = await devuser.findOne({email});
        if (exit){
            return res.status(400).send('User Alredy Registred')    
        }
        if (password != confirmpassword){
            return res.status(403).send('Password Invalid');
        }
        let newUser = new devuser({
            fullname, email, mobile, skill, password, confirmpassword
        })
        newUser.save();
        return res.status(200).send('User Registered')

    }
    catch(err){
        console.log(err);
        res.status(500).send('Server Error');

    }
});

app.post('/login', async(req,res)=>{
    console.log("login");
    try{
        const {email, password} = req.body;
        const exit = await devuser.findOne({email});
        if(!exit){
            return res.status(400).send('User Not Exit')
        }
        if(exit.password != password){
            return res.status(400).send('Password Invalid')
        }
        let payload = {
            user : {
                id : exit.id
            }
        }
        jwt.sign(payload, 'jwtPassword', {expiresIn:3600000},
        (err, token)=>{
            if (err) throw err
            return res.json({token})

        })


    }catch(err){
        console.log(err);
        res.status(500),sand('Server Error');
    }
})

app.get('/allprofiles',middleware, async(req,res)=>{
    try{
        let allprofiles = await devuser.find();
        return res.json(allprofiles)

    }catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
})

app.get('/myprofile',middleware, async(req,res)=>{
    try{
        let user = await devuser.findById(req.user.id);
        return res.json(user);
    }catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
})

app.post('/addreview', middleware, async(req, res)=>{
    try{
        const {taskWorker, rating } = req.body;
        const exit = await devuser.findById(req.user.id); // this value is from middleware
        const newReview = new review({
            taskProvider:exit.fullname,
            taskWorker,rating
        })
        newReview.save();
        return res.status(200).send('Review Updated Successfully')

    }catch(err){
        console.log(err);
        return res.status(500).send('Server Error');
    }
})

app.get('/myreview', middleware, async(req,res)=>{
    try{
        let allReviews = await review.find();
        let myReviews = allReviews.filter(review => review.taskWorker.toString() === req.user.id.toString());
        return res.status(200).json(myReviews)
    }catch(err){
        console.log(err);
        return res.status(500).send('Server Error');
    }
})

 

app.listen(4000,()=>console.log(`server running at 40000`));


