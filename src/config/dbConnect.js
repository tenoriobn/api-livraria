import mongoose from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect("mongodb+srv://tenoriobn:soutthh344866@cluster0.pwxgzrh.mongodb.net/livraria?retryWrites=true&w=majority");

  return mongoose.connection;
};

export default conectaNaDatabase;




// mongodb+srv://tenoriobn:<password>@cluster0.pwxgzrh.mongodb.net/?retryWrites=true&w=majority