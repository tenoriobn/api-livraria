import mongoose from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
};

export default conectaNaDatabase;




// mongodb+srv://tenoriobn:<password>@cluster0.pwxgzrh.mongodb.net/?retryWrites=true&w=majority