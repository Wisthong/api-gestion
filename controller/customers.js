const { response, request } = require("express");
const { customerModel } = require("../model/index");
const {
  handleHttpError,
  handleErrorResponse,
} = require("../helpers/handleError");
const { matchedData } = require("express-validator");

const createCustomer = async (req = request, res = response) => {
  try {
    const body = matchedData(req);
    const data = await customerModel.create(body);
    res.send({
      data,
      ok: true,
      message: "Registro de cliente exitoso",
    });
  } catch (error) {
    handleHttpError(res, error);
  }
};

const getCustomers = async (req = request, res = response) => {
  try {
    const data = await customerModel.find();
    // const data = await customerModel.findAllData();
    // data.set("userAdmin", undefined, { strict: false });
    if (!data) {
      return handleErrorResponse(
        res,
        "No se pudo obtener la lista de dispositivos",
        401
      );
    }
    res.send({
      data,
      ok: true,
      message: "Has obtenido la lista de los dispositivos",
    });
  } catch (error) {
    handleHttpError(res, error);
  }
};

const deleteCustomer = async (req = request, res = response) => {
  try {
    const { id } = matchedData(req);
    const verifyCustomer = await customerModel.findOne({ _id: id });
    if (!verifyCustomer) {
      return handleErrorResponse(
        res,
        "No existe Customer relacionado al ID, en nuestro sistema",
        404
      );
    }

    const data = await customerModel.delete({ _id: id });

    res.send({
      token,
      ok: true,
      message: "Customer eliminado",
    });
  } catch (error) {
    handleHttpError(res, error);
  }
};

const updateCustomer = async (req = request, res = response) => {
  try {
    let { id, ...body } = matchedData(req);

    const verifyCustomer = await customerModel.findOne({ _id: id });
    if (!verifyCustomer) {
      return handleErrorResponse(
        res,
        "No existe este id en nuestro sistema ",
        401
      );
    }

    const usuario = user._id;
    body = { ...body, usuario };
    const data = await customerModel.findByIdAndUpdate(id, body);

    res.send({
      token,
      ok: true,
      message: "Has actualizado el Customer",
    });
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

const getCustomer = async (req = request, res = response) => {
  try {
    const { id } = matchedData(req);
    // const data = await customerModel.findOne({ _id: id });
    // const data = await customerModel.findOne({ _id: id });
    const data = await customerModel.findOne({ _id: id });

    res.send({
      data,
      ok: true,
      message: "Has obtenido el Customer",
    });
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

module.exports = {
  createCustomer,
  getCustomers,
  deleteCustomer,
  updateCustomer,
  getCustomer,
};
