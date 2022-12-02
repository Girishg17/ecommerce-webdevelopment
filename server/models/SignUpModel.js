const mongoose=require('mongoose')
//const { string } = require('prop-types')
const signuptemplate=new mongoose.Schema({
fullName:{
    type:String,
    required:true
},
username:{
    type:String,
    required:false
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
token:{
    type:String,
    required:false
},
cartitems:{
type:[],
required:false
},
date:{
type:Date,
default:Date.now
}


})
module.exports=mongoose.model('mytables',signuptemplate)
