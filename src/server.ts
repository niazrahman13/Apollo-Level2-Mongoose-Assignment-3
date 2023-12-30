import {Server} from 'http'
import app from "./app";
import mongoose from 'mongoose'
import config from "./config";

let server : Server

async function main() {
  try{
    await mongoose.connect(config.url_local);

  server = app.listen(config.port,(()=>{
    console.log('Server Is Running')
}))
  }catch(error){
    console.log('Database Connection Failed')
  }
}

main()

process.on('unhandledRejection',()=>{
  console.log('UnhandledRejection is detected, shutting down')
  if(server){
    server.close(()=>{
      process.exit(1)
    })
    process.exit(1)
  }
})

process.on('uncaughtException',()=>{
  console.log('UnhandledRejection is detected, shutting down')
  process.exit(1)
})