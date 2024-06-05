const listModel = require("../models/List");

module.exports = {
  addToList: async (req, res, next) => {
    try {
      const req_data = req.body;
      console.log("Req_data ::: ", req_data);
      const listData = await listModel.insertMany(req_data);

      res.status(201).json({
        success: true,
        message: "List is added successfully.",
        data: listData,
      });
    } catch (error) {
      next(error);
    }
  },
  fetchLists: async (req, res, next) => {
    try {
      const lists = await listModel.find({});

      res.status(201).json({
        success: true,
        message: "List Data is fatched successfully.",
        data: lists,
      });
    } catch (error) {
      next(error);
    }
  },
  fetchOne: async (req, res, next) => {
    try {
      const id = req.params.id;
      const listData = await listModel.findOne({ _id: id }, { __v: 0 });

      res.status(201).json({
        success: true,
        message: "Data is fatched successfully.",
        data: listData,
      });
    } catch (error) {
      next(error);
    }
  },
};
