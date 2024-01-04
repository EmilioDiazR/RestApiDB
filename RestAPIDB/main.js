const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("node:http");
//const productRouter = require("./routes/product");

const app = express();
app.use(bodyParser.json());
//app.use("/products", productRouter);
const categoryRoutes = require("./routes/categoryRoutes");
const addressRoutes = require("./routes/addressRoutes");
const customerRoutes = require("./routes/customerRoutes");
const orderitemRoutes = require("./routes/orderitemRoutes");
const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");
const vendorRoutes = require("./routes/vendorRoutes");

app.use("/category", categoryRoutes);
app.use("/address", addressRoutes);
app.use("/customer", customerRoutes);
app.use("/orderitem", orderitemRoutes);
app.use("/order", orderRoutes);
app.use("/products", productRoutes);
app.use("/vendor", vendorRoutes);


const server = http.createServer(app);

server.listen(9000,()=>{   
    console.log("ready");
});



