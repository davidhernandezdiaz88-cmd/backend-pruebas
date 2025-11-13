const mongoose = require("mongoose");

const dbConnection = async() =>{
  try {
    console.log("Intentando conectar a MongoDB...");
    console.log("URL de conexión: ", process.env.MONGO_DB ? "Configurada" : "NO configurada");
    
    await mongoose.connect(process.env.MONGO_DB, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    });

    console.log("✅ Conectado con exito a la base de datos de mongo");

  } catch (error) {
     console.error(`❌ Error al conectarse a la base de datos:`);
     console.error(`Código de error: ${error.code}`);
     console.error(`Mensaje: ${error.message}`);
     console.error(`Stack: ${error.stack}`);
     throw new Error(`Error al conectarse a la base de datos: ${error.message}`);
  }
}

module.exports = {
  dbConnection
}