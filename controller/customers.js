const { response, request } = require("express");
const { customerModel } = require("../model/index");
const {
  handleHttpError,
  handleErrorResponse,
} = require("../helpers/handleError");
const { matchedData } = require("express-validator");
const { transporter } = require("../helpers/nodemolier");
// const { template } = require("../template");

const createCustomer = async (req = request, res = response) => {
  try {
    const body = matchedData(req);
    const data = await customerModel.create(body);
    const { email } = body;

    if (data._id.toString.length > 0) {
      const envioContabilidad = transporter.sendMail(
        {
          from: "wisthongnotificacion@gmail.com",
          to: [
            "wisthongd@gmail.com",
            // "cartera@distribuidorauniversalcali.com",
            // "asist.contable@distribuidorauniversalcali.com",
            // "wisthongdaviid@gmail.com",
            // "sistemas@distribuidorauniversalcali.com",
          ],
          subject: `Gestion de clientes Papeleria Universal, se ha registrado el cliente ${body.name} ${body.firstLastname} identificacion ${body.nit}`,

          html: `<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Document</title>
              <link rel="stylesheet" href="style.css" />
              <style>
                body {
                  background-color: #f8fafc;
                }
          
                .container {
                  padding-top: 1rem; /* 16px */
                  padding-bottom: 1rem; /* 16px */
                  margin-left: 10%;
                  margin-right: 10%;
                  display: grid;
                  grid-template-columns: repeat(12, minmax(0, 1fr));
                  background-color: #f3f4f6;
                  border-radius: 0.375rem;
                }
          
                .contenido-1 {
                  /* grid-column-start: 6; */
                  grid-column: 4 span / 9;
                }
                .text-bienvenida {
                  text-align: center;
                  margin-top: 1rem; /* 16px */
                  margin-bottom: 1rem; /* 16px */
                  font-weight: 800px;
                  text-decoration-line: underline;
                }
          
                /* col-start-4 col-span-6 */
                .contenido-2 {
                  grid-column: 4/9;
                }
          
                .a {
                  cursor: pointer;
                  padding-top: 0.5rem;
                  padding-bottom: 0.5rem;
                  margin-top: 1rem; /* 16px */
                  margin-bottom: 1rem; /* 16px */
                  padding-left: 1rem; /* 16px */
                  margin-right: 3rem; /* 16px */
                  margin-left: 3rem; /* 16px */
                  padding-right: 1rem; /* 16px */
                  color: white;
                  border-radius: 9999px;
                  text-transform: uppercase;
                  background-color: #3b82f6;
                }
          
                .a :hover {
                  text-transform: uppercase;
                  background-color: #1d4ed8;
                }
          
                span {
                  text-transform: uppercase;
                  background-color: black;
                  color: white;
                }
              </style>
            </head>
          
            <body class="">
              <div
                class="container mx-auto bg-slate-50 grid grid-cols-12 py-4 rounded-md"
              >
                <div class="contenido-1">
                  <h1 class="text-bienvenida">Bienvenido a Register CGUNO virtual</h1>
                </div>
          
                <div class="contenido-2">
                  <p class="text-justify py-2">
                    ¡Register CGUNO virtual!. El registro ha sido exitoso, y ahora esta
                    listo/a para cargar el registro en CGUNO.
                  </p>
                  <p class="py-2">Detalles de la persona registrada:</p>
                  <ul class="list-disc">
                    <li>Nombre de Usuario: ${body.name}</li>
                    <li>Correo Electrónico: ${body.email}</li>
                  </ul>
          
                  <a class="a" href="https://clientes-df2f0.web.app/control"> Control </a>
          
                  <p>
                    Plataforma autogestor de clientes <br />
                    Developer
                    <span class="bg-black text-white uppercase"
                      >© Wisthong David Martinez Castro</span
                    >
                  </p>
                </div>
              </div>
            </body>
          </html>
          `,
        },
        (err, info) => {
          if (!err) {
            const envioUser = transporter.sendMail(
              {
                from: "wisthongnotificacion@gmail.com",
                to: [email],
                subject: `USER LOGEADO`,

                html: `<!DOCTYPE html>
                <html lang="en">
                  <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                    <link rel="stylesheet" href="style.css" />
                    <style>
                      body {
                        background-color: #f8fafc;
                      }
                
                      .container {
                        padding-top: 1rem; /* 16px */
                        padding-bottom: 1rem; /* 16px */
                        margin-left: 10%;
                        margin-right: 10%;
                        display: grid;
                        grid-template-columns: repeat(12, minmax(0, 1fr));
                        background-color: #f3f4f6;
                        border-radius: 0.375rem;
                      }
                
                      .contenido-1 {
                        /* grid-column-start: 6; */
                        grid-column: 4 span / 9;
                      }
                      .text-bienvenida {
                        text-align: center;
                        margin-top: 1rem; /* 16px */
                        margin-bottom: 1rem; /* 16px */
                        font-weight: 800px;
                        text-decoration-line: underline;
                      }
                
                      /* col-start-4 col-span-6 */
                      .contenido-2 {
                        grid-column: 4/9;
                      }
                
                      .a {
                        cursor: pointer;
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem;
                        margin-top: 1rem; /* 16px */
                        margin-bottom: 1rem; /* 16px */
                        padding-left: 1rem; /* 16px */
                        margin-right: 3rem; /* 16px */
                        margin-left: 3rem; /* 16px */
                        padding-right: 1rem; /* 16px */
                        color: white;
                        border-radius: 9999px;
                        text-transform: uppercase;
                        background-color: #3b82f6;
                      }
                
                      .a :hover {
                        text-transform: uppercase;
                        background-color: #1d4ed8;
                      }
                
                      span {
                        text-transform: uppercase;
                        background-color: black;
                        color: white;
                      }
                    </style>
                  </head>
                
                  <body class="">
                    <div
                      class="container mx-auto bg-slate-50 grid grid-cols-12 py-4 rounded-md"
                    >
                      <div class="contenido-1">
                        <h1 class="text-bienvenida">Te has registrado con exito</h1>
                      </div>
                
                      <div class="contenido-2">
                        <p class="text-justify py-2">
                          ¡Register CGUNO virtual!. Nos emociona tenerte como parte de nuestra
                          comunidad. Tu registro ha sido exitoso, y ahora estás listo/a para
                          aprovechar al máximo nuestros productos y/o promociones.
                        </p>
                
                        <p class="text-justify py-2">
                          En un momento tu registro sera cargado en nuestro sistema. Espera
                          mientras nuestro equipo valida tu identidad.
                        </p>
                
                        <img style="width: 70px;" src="https://drive.google.com/uc?export=view&id=1uhPDVLKGuCP21kpDoVs3tdOReaTKUElD" alt="" srcset="">
                
                        
                      </div>
                    </div>
                  </body>
                </html>
                `,
              },
              (err, info) => {
                if (!err) {
                }
              }
            );
          }
        }
      );

      res.send({
        data,
        ok: true,
        message: "Registro de cliente exitoso",
      });
    }
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
