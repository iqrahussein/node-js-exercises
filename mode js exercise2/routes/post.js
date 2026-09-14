const express=require('express');
const { getpost, getPostInfo } = require('../controller/post');
const router=express.Router();

router.post('/',getpost)
router.post('/:id',getPostInfo)

module.exports=router