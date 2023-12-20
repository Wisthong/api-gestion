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
    firma: {
      type: String,
    },
    terminos: {
      type: Boolean,
      default: false,
    },
    publicidad: {
      type: Boolean,
      default: false,
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

CustomerSchema.statics.findOneData = function (id) {
  const joinData = this.aggregate([
    {
      $match: {
        _id: Types.ObjectId(id),
      },
    },
    {
      $lookup: {
        from: "storages", //TODO: Desde donde
        localField: "firma", //TODO: Campo de referencia en el modelo actual
        foreignField: "_id", //TODO: Campo de referencia para el join tabla a juntar
        as: "firmaCustomer", //TODO: Apodo
      },
    },
    {
      $unwind: "$cliente",
    },
  ]);
  return joinData;
};

CustomerSchema.plugin(mongoose_delete, { overrideMethods: "all" });
module.exports = model("Customers", CustomerSchema);
