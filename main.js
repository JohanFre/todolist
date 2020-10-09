let addItem = document.getElementById("addTodoForm");
let itemAdded = document.getElementById("addTodoInputField");
let todo = document.getElementById("todoList");
itemAdded.focus();

addItem.addEventListener("submit", (e) => {
  e.preventDefault();
  createItem(itemAdded.value);
});

function createItem(x) {
  let addedTodos = `<li>${x} <button onclick="deleteTodo(this)">Delete</button></li>`;
  todo.insertAdjacentHTML("beforeend", addedTodos);
  itemAdded.value = "";
  itemAdded.focus();
}

function deleteTodo(TodoDone) {
  TodoDone.parentElement.remove();
  itemAdded.focus();
}
