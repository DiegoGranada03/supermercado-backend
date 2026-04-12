const Provider = require("../models/Provider");

exports.getAll = async (req, res) => {
  const data = await Provider.findAll();
  res.json(data);
};

exports.create = async (req, res) => {
  const data = await Provider.create(req.body);
  res.json(data);
};