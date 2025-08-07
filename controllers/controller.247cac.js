import caCancerModel from "../models/model.247CAC.js";

const listaRegistros = async (req, res) => {
    try {
        const registrosList = await caCancerModel.find({});
        return res.status(200).json(registrosList);
        
    } catch (error) {
        return res.status(500).send(error);
    }
}

const createCaCancer = async (req, res) => {
    console.log("Datos recibidos:", req.body);
    try {
        const regCac= new caCancerModel(req.body);
        await regCac.save();
        return res.status(201).json({regCac});
    } catch (error) {
        console.error("Error al crear el registro:", error);
        return res.status(500).json({ message: "Error crear registro" });        
    }
}

const modificarRegistroCa = async (req, res) => {
    try {
        const {id} = req.params;
        const registro = req.body;
        const registroCambiado = await caCancerModel.findByIdAndUpdate(id, registro, {new: true});
        if (!registroCambiado) {
            return res.status(404).json({message: "registro no encontrado"});
        }
        return res.status(200).json({message: "registro modificado exitosamente SI", id});
    } catch (error) {
        return res.status(500).send(error);
    }
}

export {createCaCancer, modificarRegistroCa,listaRegistros};