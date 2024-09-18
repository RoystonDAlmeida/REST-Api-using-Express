// This file will define the routes using express.Router() instance
const express=require('express')
const router=express.Router()

// GET method(READ)
router.get('/users',(req,res)=>{
	res.send('List of users')
})

router.get('/users/:id',(req,res)=>{
	const id=req.params.id
	res.send(`Details of User:${id}`)
})

//POST method(CREATE)
router.post('/users',(req,res)=>{
	res.send('Create User')
})

//PUT method(UPDATE)
router.put('/users/:id',(req,res)=>{
	const userId=req.params.id
	res.send(`Update user:${userId}`)
})

//DELETE method(DELETE)
router.delete('/users/:id',(req,res)=>{
	const userId=req.params.id
	res.send(`Delete User Id:${userId}`)
})

// Making this module available for export
module.exports=router
