var express = require('express');
var router = express.Router();

const sendEmailRouter = require('./utils/sendEmail')
const testRouter = require('./utils/test')
const testModelRouter = require('./utils/testModel')

router.get('/',(req,res)=>{
  res.send("api接口")
})

router.use('/sendEmail',sendEmailRouter)
router.use('/test',testRouter)
router.use('/testModel',testModelRouter)


module.exports = router;
