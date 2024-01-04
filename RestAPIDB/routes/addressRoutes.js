const express = require("express");
const {Router} =  express;
const mongoose = require("mongoose");
const AddressModelCreator = require("../models/address")
const routes = Router();
const bdstore = "mongodb://127.0.0.1:27017/test"

routes.get("/",async(req, res)=>{
    try{
        const connection = await mongoose.createConnection(bdstore);
        const AddressModel = AddressModelCreator(connection);
    //Da los datos
        const data = await AddressModel.find();
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
    const AddressModel = AddressModelCreator(connection);
    //Da los datos
    const data = await AddressModel.find({"_id":req.params.id});
    res.json(data[0]);
    connection.close();
});

routes.post("/", async(req, res)=>{
    const connection = await mongoose.createConnection(bdstore);
    const AddressModel = AddressModelCreator(connection);
    //Se guarda los datos
    const Address = new AddressModel(req.body);
    const data = await Address.save();
    res.json(data);
    connection.close();    
});

routes.delete("/:id", async(req, res)=>{
    const connection = await mongoose.createConnection(bdstore);
    const AddressModel = AddressModelCreator(connection);
    const data = await AddressModel.deleteOne({"_id":req.params.id})
    res.json(data);
    connection.close();
});

routes.put("/:id", async(req, res)=>{
    const connection = await mongoose.createConnection(bdstore);
    const AddressModel = AddressModelCreator(connection);
    const data = await AddressModel.updateOne({"_id":req.params.id},req.body);
    res.json(data);
    connection.close();
});

module.exports = routes;