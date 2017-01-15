const router = require('express').Router()
const { sendMail } = require('./../services/sendMail')
const bodyParser = require('body-parser')
const parseJson = bodyParser.json()

router.route('')
  .post(parseJson, sendMail)

module.exports = router
