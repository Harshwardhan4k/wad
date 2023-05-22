const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "data.json");

function readData() {
  const jsonData = fs.readFileSync(dataFilePath, "utf8");
  return JSON.parse(jsonData);
}

function writeData(data) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(dataFilePath, jsonData);
}

function generateNextId(data) {
  const ids = data.map((item) => item.id);
  const maxId = Math.max(...ids);
  if (maxId === -Infinity) {
    return 1;
  }
  return maxId + 1;
}

function getAll() {
  return readData();
}

function getById(id) {
  const data = readData();
  return data.find((item) => item.id == id);
}

function create(newItem) {
  const data = readData();
  const nextId = generateNextId(data);
  const newItemWithId = { id: nextId, ...newItem };
  data.push(newItemWithId);
  writeData(data);
  return newItemWithId;
}

function update(id, updatedItem) {
  const data = readData();
  const index = data.findIndex((item) => item.id == id);
  console.log(index);
  if (index !== -1) {
    data[index] = { id: data[index].id, ...updatedItem };
    console.log(data);
    writeData(data);
    return data[index];
  }
  return null;
}

function remove(id) {
  const data = readData();
  const index = data.findIndex((item) => item.id == id);
  if (index !== -1) {
    const removedItem = data[index];
    data.splice(index, 1);
    writeData(data);
    return removedItem;
  }
  return null;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
