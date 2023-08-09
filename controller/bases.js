const { response, request } = require("express");
const { BasesModel } = require("../model/index");
const {
  handleHttpError,
  handleErrorResponse,
} = require("../helpers/handleError");
const { matchedData } = require("express-validator");

const createBases = async (req = request, res = response) => {
  try {
    const body = matchedData(req);
    const data = await BasesModel.create(body);

    res.send({
      data,
      ok: true,
      message: "Registro de cliente exitoso",
    });
  } catch (error) {
    handleHttpError(res, error);
  }
};

const getBasess = async (req = request, res = response) => {
  try {
    const data = await BasesModel.find();
    // const data = await BasesModel.findAllData();
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

const deleteBases = async (req = request, res = response) => {
  try {
    const { id } = matchedData(req);
    const verifyBases = await BasesModel.findOne({ _id: id });
    if (!verifyBases) {
      return handleErrorResponse(
        res,
        "No existe Bases relacionado al ID, en nuestro sistema",
        404
      );
    }

    const data = await BasesModel.delete({ _id: id });

    res.send({
      token,
      ok: true,
      message: "Bases eliminado",
    });
  } catch (error) {
    handleHttpError(res, error);
  }
};

const updateBases = async (req = request, res = response) => {
  try {
    let { id, ...body } = matchedData(req);

    const verifyBases = await BasesModel.findOne({ _id: id });
    if (!verifyBases) {
      return handleErrorResponse(
        res,
        "No existe este id en nuestro sistema ",
        401
      );
    }

    const usuario = user._id;
    body = { ...body, usuario };
    const data = await BasesModel.findByIdAndUpdate(id, body);

    res.send({
      token,
      ok: true,
      message: "Has actualizado el Bases",
    });
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

const getBases = async (req = request, res = response) => {
  try {
    const { id } = matchedData(req);
    // const data = await BasesModel.findOne({ _id: id });
    // const data = await BasesModel.findOne({ _id: id });
    const data = await BasesModel.findOne({ _id: id });

    res.send({
      data,
      ok: true,
      message: "Has obtenido el Bases",
    });
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

module.exports = {
  createBases,
  getBasess,
  deleteBases,
  updateBases,
  getBases,
};
