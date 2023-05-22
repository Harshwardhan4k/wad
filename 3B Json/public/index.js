function getAllItems() {
  fetch("/api/items")
    .then((response) => response.json())
    .then((items) => {
      const output = document.getElementById("output");
      output.textContent = JSON.stringify(items, null, 2);
    })
    .catch((error) => console.error(error));
}

function createItem(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const name = nameInput.value;

  fetch("/api/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })
    .then((response) => response.json())
    .then((createdItem) => {
      const output = document.getElementById("output");
      output.textContent = JSON.stringify(createdItem, null, 2);
      nameInput.value = "";
    })
    .catch((error) => console.error(error));
}

function updateItem(event) {
  event.preventDefault();

  const updateIdInput = document.getElementById("updateId");
  const updateNameInput = document.getElementById("updateName");
  const id = updateIdInput.value;
  const name = updateNameInput.value;

  fetch(`/api/items/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })
    .then((response) => response.json())
    .then((updatedItem) => {
      const output = document.getElementById("output");
      output.textContent = JSON.stringify(updatedItem, null, 2);
      updateIdInput.value = "";
      updateNameInput.value = "";
    })
    .catch((error) => console.error(error));
}

function deleteItem(event) {
  event.preventDefault();

  const deleteIdInput = document.getElementById("deleteId");
  const id = deleteIdInput.value;

  fetch(`/api/items/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((deletedItem) => {
      const output = document.getElementById("output");
      output.textContent = JSON.stringify(deletedItem, null, 2);
      deleteIdInput.value = "";
    })
    .catch((error) => console.error(error));
}
