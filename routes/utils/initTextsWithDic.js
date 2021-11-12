const express = require('express');
const router = express.Router();

const cp = require('child_process')

/* GET home page. */
router.get('/', function (req, res, next) {
  // 1. 数据库名
  // 2. 字典的表名
  // 3. 语料数据的表名
  // 4. 保存结果的表名
  // 5. 用户的 userEmail
  // let {} = req.query
  const userEmail = req.session.name;
  cp.exec(`python "./public/python/test.py" mongoosedb dictionaries texts texts ${userEmail}`,function(err,stdout){
    let resData = {}
    if(err){
      console.log("error",err)
      resData = {
        status:404,
        message:"请求失败",
        data:[]
      }
      res.send('初始化失败')
    }else{
      console.log("调用成功")
      res.send("初始化成功")
    }
  })
  // cp.on("exit",(code)=>{

  // })
});

module.exports = router;