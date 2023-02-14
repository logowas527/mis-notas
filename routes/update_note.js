const express = require("express");
const router = express.Router();
const db = require("../config/database");

router.put("/:id", async (req, res) => {
  const query = `UPDATE notepad SET title=$1 , body=$2 WHERE id=$3 RETURNING *;`;
  const values = [req.body.title, req.body.body, req.params.id];
  const { rows } = await db.query(query, values);
  res.json(rows);
});

module.exports = router;