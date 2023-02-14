const express = require("express");
const router = express.Router();
const db = require("../config/database");

router.delete("/:id", async (req, res) => {
  const value = [req.params.id];
  const query = `DELETE FROM notepad WHERE id=$1 RETURNING *`;
  const  result  = await db.query(query, value);
  res.json(result);
});

module.exports = router;