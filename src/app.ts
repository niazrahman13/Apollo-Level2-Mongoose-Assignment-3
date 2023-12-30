import bodyParser from 'body-parser';
import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import { notFound } from './middleware/notFound';
import router from './routes/route';
import { globalErrorHandler } from './error/globalErrorHandler';

const app:Application = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.json('Welcome to Home page')
})

// application routes

app.use(router)


// Global Error Handler

app.use(notFound)

app.use(globalErrorHandler)

export default app;
