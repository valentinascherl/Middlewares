const fs= require('fs');
const {check, validationResult, body} = require('express-validator');
let admins = ["Ada", "Greta", "Vim", "Tim"];


let adminMiddleware = {
admin: function admin (req,res,next){
    admins.forEach(function(admin){

    if(admin==req.body.name){
        console.log(req.body.name);
    res.send('Hola admin ' + req.body.name);

   }else{
       res.send('No tiene los privilegios para ingresar')
   }
});
}}
module.exports = adminMiddleware;