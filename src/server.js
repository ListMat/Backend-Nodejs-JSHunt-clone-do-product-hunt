const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
const RequeireDir = require("require-dir");

// Iniciando o app
const server = express();
server.use(express.json());
server.use(cors())

// Iniciando o DB
mongoose.connect(
  "mongodb+srv://Nodeapi:nodeapi@cluster0-lo8yp.mongodb.net/Apinode?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
RequeireDir("./models");

// Rodas
server.use("/api", require("./routes"));

// porta: localhost:3001
server.listen(3001);
