import caCancerModel from "../models/model.247CAC.js";

const createCaCancer = async (req, res) => {
    console.log("Datos recibidos:", req.body);
    try {
        //console.log("Datos recibidos:", req.body);
        // const toCreate = fetchRegCa(req.body);
        // if (toCreate==null) {
        //     return res.status(400).send("Registro no valido")
            
        // }

        const regCac= new caCancerModel(req.body);
        await regCac.save();
        return res.status(201).json({regCac});
    } catch (error) {

        // if (error.code === 11000) {
        //     return res.status(400).json({ message: "Pokemon ya existe", error });
        // }
        console.error("Error al crear el registro:", error);
        return res.status(500).json({ message: "Error crear registro" });
        
    }
}

export {createCaCancer};