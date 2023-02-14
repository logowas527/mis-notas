const express = require("express");
const router = express.Router();
const db = require("../config/database");

router.get("/:id", async (req, res) => {
  const value = [req.params.id];
  const query = `SELECT * FROM notepad WHERE id=$1;`;
  const { rows } = await db.query(query, value);
  res.json(rows);
});

module.exports = router;
