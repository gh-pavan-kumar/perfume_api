const express = require("express");
const perfumes = require("./data.json");
const app = express();
const PORT = 8000;

//routes

app.get("/api/perfumes", (req, res) => {
  return res.json(perfumes);
});

app.get("/api/perfumes/:id", (req, res) => {
  const id = Number(req.params.id);
  const perfume = perfumes.find((perfume) => perfume.id === id);
  return res.json(perfume);
});

app.post("/api/perfumes", (req, res) => {
  // to create new perfume
  return res.json({ status: "pending" });
});

app.patch("/api/perfumes", (req, res) => {
  // to update the perfume product
  return res.json({ status: "pending" });
});

app.delete("/api/perfumes", (req, res) => {
  // to delete the perfume product
  return res.json({ status: "pending" });
});
app.listen(PORT, () => console.log(`server is stated on port number 8000`));
