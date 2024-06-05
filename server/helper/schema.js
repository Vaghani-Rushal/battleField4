const joi = require("joi");
const validate = require("./joivalidation");

module.exports = {
  listSchame: joi.array().items(
    joi.object().keys({
      title: validate.reqstring,
      description: validate.reqstring,
      image: validate.reqstring,
    })
  ),
  params: joi.object().keys({
    id: validate.reqId,
  }),
};
