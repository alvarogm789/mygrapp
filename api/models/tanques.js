// storeModel.js
import mongoose from "mongoose";

const tanqueSchema = new mongoose.Schema({
  // modelo de cómo se grabarán los datos en la base de datos, la estructura
  tipoTanque: {
    type: String,
    required: true,
  }
});

export default mongoose.model("Tanque", tanqueSchema);
