const express = require("express");
const {
  getUsers,
  getUserInfo,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/user");
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserInfo);
router.post("/create", createUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
module.exports = router;
