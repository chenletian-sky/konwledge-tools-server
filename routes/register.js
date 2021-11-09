const express = require('express');
const router = express.Router();
const userModel = require('../model/userModel')
const dictionaryModel = require('../model/dictionaryModel')

router.post('/',(req, res) => {
  const { name, email, pwd } = req.query;
  userModel.findOne({ email })
    .then(result => {
      if (result) {
        res.send({
          status: 403,
          message: '用户已注册',
          data: []
        })
      } else {
        const insertObj = new userModel({ name, email, pwd })
        insertObj.save()
          .then(result => {
            // console.log(result)
            const dictionarySave = new dictionaryModel({ userEmail: email, data: [] })
            dictionarySave.save().then(dictionary => {
              res.send({
                status: 200,
                message: '注册成功',
                data: [result, dictionary]
              })
            })
          })
      }
    })
})

module.exports = router;
