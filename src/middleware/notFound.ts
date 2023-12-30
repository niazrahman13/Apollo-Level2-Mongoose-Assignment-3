import { NextFunction, Request, Response } from "express"

const notFound = ((req:Request,res:Response,next:NextFunction)=>{

res.status(404).json({
    success:"Failed",
    message: 'Route Not Found'
})

})

export {notFound}