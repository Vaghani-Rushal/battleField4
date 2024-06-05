const mongoose = require("mongoose");

const listSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const List = mongoose.model("list", listSchema);

module.exports = List;
