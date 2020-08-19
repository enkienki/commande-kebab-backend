require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const socketIO = require("socket.io");

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) return callback(null, true);

    callback(new Error("Not allowed by CORS"));
  },
};

//controllers
const fetchProducts = require("./controllers/fetch-products");
const sendOrder = require("./controllers/send-orders");
const fetchOrders = require("./controllers/fetch-orders");
const sendFinishedOrder = require("./controllers/send-finished-orders");
const deleteOrder = require("./controllers/delete-orders");
//models
const order = require("./models/orderModel");
const finishedOrder = require("./models/finishedOrderModel");
const product = require("./models/productModel");

//const seedCarteToDbFromBackend = require("./functions/seedCarteToDbFromBackend");
//const carte = require("./database/carte");
const seedCarteToDb = require("./functions/seedCarteToDb");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors(corsOptions));
const router = express.Router();
const server = http.createServer(app);

const dbRoute = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-wluuq.mongodb.net/kebab?retryWrites=true&w=majority`;
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
// When successfully connected
db.on("connected", () =>
  console.log("Established Mongoose Default Connection")
);
// When connection throws an error
db.on("error", (err) =>
  console.log("Mongoose Default Connection Error : " + err)
);

// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This creates our socket using the instance of the server
const io = socketIO(server);
io.on("connection", (socket) => {
  console.log("New client connected " + socket.id);
  socket.on("initial_data", () => {
    order
      .find({})
      .sort({ $natural: -1 })
      .then((docs) => {
        io.sockets.emit("get_data", docs);
      });
  });
  socket.on("finished_orders", () => {
    finishedOrder
      .find({})
      .sort({ $natural: -1 })
      .then((docs) => {
        io.sockets.emit("get_finished_orders", docs);
      });
  });
  socket.on("carte", () => {
    product
      .find({})
      //.sort({ $natural: -1 })
      .then((docs) => {
        io.sockets.emit("get_carte", docs);
      });
  });
  db.watch().on("change", () => {
    order
      .find({})
      .sort({ $natural: -1 })
      .then((docs) => {
        io.sockets.emit("get_data", docs);
      });
    finishedOrder
      .find({})
      .sort({ $natural: -1 })
      .then((docs) => {
        io.sockets.emit("get_finished_orders", docs);
      });
    product
      .find({})
      //.sort({ $natural: -1 })
      .then((docs) => {
        io.sockets.emit("get_carte", docs);
      });
  });
  // disconnect is fired when a client leaves the server
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// send Product to DB
//seedCarteToDbFromBackend(carte);

// Routes
router.get("/fetchproducts", (req, res) => fetchProducts(req, res));
router.get("/fetchorders", (req, res) => fetchOrders(req, res));
router.post("/sendorder", (req, res) => sendOrder(req, res));
router.post("/sendfinishedorder", (req, res) => sendFinishedOrder(req, res));
router.post("/deleteorder", (req, res) => deleteOrder(req, res));
router.post("/sendcarte", (req, res) => seedCarteToDb(req, res));

// Append /api for http requests
app.use("/api", router);

// Bootstrap server
server.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));
