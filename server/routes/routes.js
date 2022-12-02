const express=require('express')
const router= express.Router();
const signuptemplatecopy=require('../models/SignUpModel.js')
const generatetoken = () => {
    const token = require("random-token").create("asdfghjkmjjl")
    return token(50);
}

router.post('/addtocart',(req,res)=>{
    const {token,item} = req.body;
    signuptemplatecopy.findOne({"token":token},(err ,user)=>{
        user.cartitems = user.cartitems.filter((data)=>{
            if( data._id == item._id) return false
            else return true
        })
        user.cartitems.push(item)
        user.save()
    })
})

router.post('/user',(req,res)=>{
    signuptemplatecopy.findOne({"token":req.body.token},(err,user)=>{
        if(err) {
            console.log(err);
        }
        res.json(user)
    })
})
router.post('/signup',(req,res )=>{
   
   const signedupuser=new signuptemplatecopy({
       fullName:"req.body.fullName",
       username:"req.body.username",
       email:"req.body.email",
       password:"req.body.password",
      
   })
   
   signedupuser.save()
   .then(data=>{
       res.json(data)
   })
   .catch(error=>{
       res.json(error)
   })
})
//  router.get('/signin')
// module.exports=router
router.post('/',(req,res)=>{
signuptemplatecopy.findOne({email:req.body.email},async (err,user)=>{
    if(err) {
        console.log(err);
    }
    if(user){
        if(req.body.password===user.password ){
            const token = generatetoken();
            console.log(token);
            user.token = token;
            user.save();
            console.log(user);
            res.send({message:'login succesfull',user:user})
            
            
        }
        else{
            res.send({message:'paasword didnt match '})
        }
    }
    else{
        res.send({message:'user not registered'})
    }
})


})

router.post('/delete',(req,res)=>{
    
    // console.log(req.body.user,req.body.obj)
    res.send("OK")
    signuptemplatecopy.updateOne({email:req.body.user},{$pull:{cartitems:req.body.obj}}).then(()=>{console.log("Done")})
})
module.exports=router