const mongoose = require('mongoose')
const { baseUrl } = require('./index')
const { info } = require('../utils/log4js')
mongoose.connect(baseUrl)
const db = mongoose.connection

db.on('error', () => {
  info('数据库连接失败！')
})

db.once('open', () => {
  info('数据库连接成功！')
})