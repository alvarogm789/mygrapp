import express from "express";
import usuario from "./api/models/Usuarios.js";



// endPoints:




app.delete("/api/clients", async (req, res) => {
  const Usuario = req.body.Usuario;

  try {
    const result = await usuario.findOneAndDelete({ Usuario: Usuario });
    if (result) {
      res.status(200).send(`Se ha eliminado el cliente con identificador ${Usuario} con éxito`);
      console.log("******************************************************************");
      console.log(`Se ha eliminado el cliente con identificador ${Usuario} con éxito`);
      console.log("******************************************************************");
    } else {
      console.log("")
      console.log(`Se intentó eliminar un registro que no existe, registro: ${Usuario}`)
      console.log("")
      res.status(404).send("Registro no encontrado");
    }
  } catch (err) {
    res.status(500).send(err.message);
    console.log("//////////////////////////////////////");
    console.log("//        ¡Ocurrio un error!        //");
    console.log(err);
    console.log("//////////////////////////////////////");
  }
});


app.get("/api/clients", async (req, res) =>{
  try {
    const documentos = await usuario.find({});
    res.status(200).send(documentos);
    console.log("")
    console.log("METODO GET EJECUTADO CORRECTAMENTE");
    console.log("")
  } catch (err) {
    res.status(500).send(err);
    console.log("OCURRIO UN ERROR EN METODO GET");
  }
});




//metodo put



