const express = require("express");
const model = require("./model");
const path = require("path");

const app = express();
app.use(express.json());
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Serve index.html as the default page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Get all items
app.get("/api/items", (req, res) => {
  const items = model.getAll();
  res.json(items);
});

// Get item by ID
app.get("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const item = model.getById(id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});

// Create a new item
app.post("/api/items", (req, res) => {
  const newItem = req.body;
  const createdItem = model.create(newItem);
  res.status(201).json(createdItem);
});

// Update an item
app.put("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const updatedItem = req.body;
  const item = model.update(id, updatedItem);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});

// Delete an item
app.delete("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const removedItem = model.remove(id);
  if (removedItem) {
    res.json(removedItem);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
