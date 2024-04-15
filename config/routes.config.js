const express = require("express");
const router = express.Router();

const posts = require("../controllers/posts.controller");

router.get("/", (req, res) => {
  res.send("Hello from routes");
});

// CRUD
router.post("/posts", posts.create);
router.get("/posts", posts.list);
router.get("/posts/:id", posts.detail);
router.patch("/posts/:id", posts.update);
router.delete("/posts/:id", posts.delete);

module.exports = router;
