const { Schema, model, Types } = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const BaseSchema = new Schema(
  {
    url: {
      type: String,
    },
    // filename: {
    //   type: String,
    // },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

BaseSchema.plugin(mongoose_delete, { overrideMethods: "all" });
module.exports = model("bases", BaseSchema);
