const  mongoose  = require("mongoose")

const itemSchema = new mongoose.Schema(
  {
    item: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique:true
    },
  },
  {
    timestamps: true,
  }
);

module.exports =  mongoose.model('Item',itemSchema)
