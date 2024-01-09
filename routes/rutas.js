const express = require("express");

const routerLibros = express.Router();

const libros = require("../models/libros");

routerLibros.get("/", async (req, res) => {
  try {
    const libro = await libros.find();
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: "error al obtener los datos" });
  }
});

routerLibros.get("/:id", async (req, res) => {
  try {
    const libro = await libros.findById(req.params.id);
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: "error al encontrar el libro " });
  }
});

routerLibros.post("/", async (req, res) => {
  try {
    const nuevoLibro = new libros(req.body);
    await nuevoLibro.save();
    res.json(nuevoLibro);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el libro" });
  }
});

routerLibros.put("/:id", async (req, res) => {
  try {
    const libro = await libros.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: "Error al modificar el libro" });
  }
});

routerLibros.delete("/:id", async (req, res) => {
  try {
    await libros.findByIdAndDelete(req.params.id);
    res.json({ message: "libro eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el libro" });
  }
});

module.exports = routerLibros;
