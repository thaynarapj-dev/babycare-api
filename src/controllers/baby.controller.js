const { v4: uuidv4 } = require("uuid");
const babies = require("../models/baby.model");

// Criar bebê
exports.createBaby = (req, res) => {
  const { name, birthDate, weight, height } = req.body;

  if (!name || !birthDate) {
    return res.status(400).json({ error: "Nome e data de nascimento são obrigatórios." });
  }

  const newBaby = {
    id: uuidv4(),
    name,
    birthDate,
    weight: weight || null,
    height: height || null,
    createdAt: new Date(),
  };

  babies.push(newBaby);
  res.status(201).json(newBaby);
};

// Listar todos
exports.getBabies = (req, res) => {
  res.json(babies);
};

// Buscar por ID
exports.getBabyById = (req, res) => {
  const baby = babies.find(b => b.id === req.params.id);

  if (!baby) {
    return res.status(404).json({ error: "Bebê não encontrado." });
  }

  res.json(baby);
};
