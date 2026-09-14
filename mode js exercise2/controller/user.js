const { json } = require("express");

// const users=[
//   {id:1,name:"iqra"},
//   {id:2,name:"layla"}
// ]
const User = require("../models/user");

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.getUserInfo = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send("user not found");
  res.json(user);
};

exports.createUser = async (req, res) => {
  try {
    console.log("body data", req.body);
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).send("user not found");
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(500).send("server error", err);
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).send("User not found");
    }
    res.send(`User with id ${id} deleted`);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
