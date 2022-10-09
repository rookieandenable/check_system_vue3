const mongoose = require('mongoose')

const menusSchema = mongoose.Schema({
  menuType: Number,
  menuName: String,
  menuCode: String,
  path: String,
  icon: String,
  component: String,
  menuState: String,
  parentId: [mongoose.Types.ObjectId],
  createTime: {
    type: Date,
    default: Date.now()
  },
  updateTime: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('menus', menusSchema, 'menus')