const db = require("./config/database");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const create_note = require("./routes/create_note");
const read_note = require("./routes/read_note");
const delete_note = require("./routes/delete_note");
const update_note = require("./routes/update_note");


app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true}))

app.use("/create_note", create_note);
app.use("/read_note", read_note);
app.use("/delete_note", delete_note);
app.use("/update_note", update_note);

app.get("/", async (req, res) => {
    const query = `
      SELECT * FROM notepad
      ORDER BY id;
      `;
    const { rows } = await db.query(query);
    res.json(rows);
  });
  
  app.listen(3000, () => {
    console.log("Puerto 3000");
  });