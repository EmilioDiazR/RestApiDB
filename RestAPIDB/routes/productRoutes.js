const express = require("express");
const {Router} =  express;
const mongoose = require("mongoose");
const ProductModelCreator = require("../models/products")
const routes = Router();
const bdstore = "mongodb://127.0.0.1:27017/test"

routes.get("/",async(req, res)=>{
    try{
        const connection = await mongoose.createConnection(bdstore);
        const ProductModel = ProductModelCreator(connection);
    //Da los datos
        const data = await ProductModel.find();
        res.json(data);
        connection.close();
    }catch (error){
        mongoose.connection.error();
        res.status(500);
        res.json({message:"error",error:error});
    }
});
routes.get("/:id",async(req, res)=>{
    const connection = await mongoose.createConnection(bdstore);
    const ProductModel = ProductModelCreator(connection);
    //Da los datos
    const data = await ProductModel.find({"_id":req.params.id});
    res.json(data[0]);
    connection.close();
});

routes.post("/", async(req, res)=>{
    const connection = await mongoose.createConnection(bdstore);
    const ProductModel = ProductModelCreator(connection);
    //Se guarda los datos
    const Product = new ProductModel(req.body);
    const data = await Product.save();
    res.json(data);
    connection.close();    
});

routes.delete("/:id", async(req, res)=>{
    const connection = await mongoose.createConnection(bdstore);
    const ProductModel = ProductModelCreator(connection);
    const data = await ProductModel.deleteOne({"_id":req.params.id})
    res.json(data);
    connection.close();
});

routes.put("/:id", async(req, res)=>{
    const connection = await mongoose.createConnection(bdstore);
    const ProductModel = ProductModelCreator(connection);
    const data = await ProductModel.updateOne({"_id":req.params.id},req.body);
    res.json(data);
    connection.close();
});

module.exports = routes;