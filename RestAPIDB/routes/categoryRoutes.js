const express = require("express");
const {Router} =  express;
const mongoose = require("mongoose");
const CategoryModelCreator = require("../models/category")
const routes = Router();
const bdstore = "mongodb://127.0.0.1:27017/test"

routes.get("/",async(req, res)=>{
    const connection = await mongoose.createConnection(bdstore);
    try{
        const CategoryModel = CategoryModelCreator(connection);
    //Da los datos
        const data = await CategoryModel.find();
        res.json(data);
        connection.close();
    }catch(error){
        connection.close();
        res.status(500);
        //error:error solo se usaría para debuggear, pero no para ejecución oficial.
        res.json({message:"error",error:error});
    }
});
routes.get("/:id",async(req, res)=>{
    const connection = await mongoose.createConnection(bdstore);
    const CategoryModel = CategoryModelCreator(connection);
    //Da los datos
    const data = await CategoryModel.find({"_id":req.params.id});
    res.json(data[0]);
    connection.close();
});

routes.post("/", async(req, res)=>{
    const connection = await mongoose.createConnection(bdstore);
    const CategoryModel = CategoryModelCreator(connection);
    //Se guarda los datos
    const Category = new CategoryModel(req.body);
    const data = await Category.save();
    res.json(data);
    connection.close();    
});

routes.delete("/:id", async(req, res)=>{
    const connection = await mongoose.createConnection(bdstore);
    const CategoryModel = CategoryModelCreator(connection);
    const data = await CategoryModel.deleteOne({"_id":req.params.id})
    res.json(data);
    connection.close();
});

routes.put("/:id", async(req, res)=>{
    const connection = await mongoose.createConnection(bdstore);
    const CategoryModel = CategoryModelCreator(connection);
    const data = await CategoryModel.updateOne({"_id":req.params.id},req.body);
    res.json(data);
    connection.close();
});

module.exports = routes;