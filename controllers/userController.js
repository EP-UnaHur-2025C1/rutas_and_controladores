const users = require("../data/users.json");
const { User } = require("../db/models");

const getUser = async (req, res) => {
  res.status(200).json(await User.findAll({}));
};

const getUserById = (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id == id);
  if (user) res.status(200).json(user);
  else
    res.status(404).json({
      message: `El ${id} no se encuentra.`,
    });
};

const createUser = (req, res) => {
  const userBody = req.body;
  //const id = Math.max(...users.map((u) => u.id)) + 1;
  const id = users.reduce((max, u) => (max > u.id ? max : u.id), 0) + 1;
  const user = { id, ...userBody, enabled: false };
  users.push(user);
  res.status(201).json(user);
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  const idx = users.findIndex((u) => u.id == id);
  if (idx >= 0) {
    users.splice(idx, 1);
    res.status(200).json({
      message: `El ${id} se elimino correctamente.`,
    });
  } else
    res.status(404).json({
      message: `El ${id} no se encuentra.`,
    });
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const user = users.find((u) => u.id == id);
  if (user) {
    user.user_name = body.user_name;
    user.edad = body.edad;
    user.enabled = body.enabled;
    res.status(200).json(user);
  } else
    res.status(404).json({
      message: `El ${id} no se encuentra.`,
    });
};

module.exports = { getUser, getUserById, createUser, deleteUser, updateUser };
