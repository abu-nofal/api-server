'use strict'

const logger=(req,res,next)=>{
    console.log(
        `route : ${req.method} ,${req.path} `
    );
    next();
}

module.exports=logger