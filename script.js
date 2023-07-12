
const exserver =require('express')
const app=exserver()
const configserver=require('../configs/server')

app.listen(configserver.PORT,()=>{
    console.log(`Start the server with Port no ${configserver.PORT}`)
    
})