import { Router } from "express";
import { createCaCancer, listaRegistros, modificarRegistroCa } from "../controllers/controller.247cac.js";

const router = Router();

router.get("/hola", (req, res) => {
    console.log("hola ruta")
    return res.status(200).json({
        message: "Hola desde la ruta de prueba"})
});

router.post("/crear", createCaCancer);
router.get("/lista", listaRegistros);
router.put("/actualizar/:id", modificarRegistroCa);


export default router;