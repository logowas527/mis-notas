const express = require("express");
const router = express.Router();
const db = require("../config/database");

router.post("/", async (req, res) => {
  const values = [req.body.title, req.body.body]
  const query = "INSERT INTO notepad(title,body) VALUES($1,$2) RETURNING *";
  const { rows } = await db.query(query, values);
  res.json(rows);
});

module.exports = router;