const { Schema, model, Types } = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const CustomerSchema = new Schema(
  {
    name: {
      type: String,
    },
    firstLastname: {
      type: String,
    },
    secondLastname: {
      type: String,
    },
    email: {
      type: String,
    },
    nit: {
      type: Number,
    },
    sex: {
      type: String,
    },
    dateBirth: {
      type: String,
    },
    campus: {
      //Sede
      type: String,
    },
    numberCellphone: {
      type: Number,
    },
    address: {
      //Direccion
      type: String,
    },
    neighborhood: {
      //Bario
      type: String,
    },
    nameDepartament: {
      type: String,
    },
    divipolaCity: {
      type: String,
    },
    facturacion: {
      type: String,
    },

    // status: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

CustomerSchema.plugin(mongoose_delete, { overrideMethods: "all" });
module.exports = model("Customers", CustomerSchema);
