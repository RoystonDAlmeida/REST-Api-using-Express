const express=require('express')
const app=express()
const port=3000

// Requiring the routes
const routes=require('./routes')

//Mount the routes on a particular path
app.use('/api',routes)

app.listen(port,()=>{
	console.log(`Server is active on PORT:${port}`)
})
