/** @format */

const todoContainer = document.querySelector(".todolist");
const emptyMsg = document.querySelector(".p2");
const inputEl = document.querySelector(".input");
const form = document.querySelector(".button");
const itemCount = document.querySelector(".item-count");
const deleteAllBtn = document.querySelector(".btn2");

let todoLists = [
  {
    todoName: "Cook rice",
    id: Date.now().toLocaleString(),
    completed: false,
  },

  // {
  //   todoName: "gift rice",
  //   id: Date.now().toLocaleString(),
  //   completed: false,
  // },
];

function renderTodo(todos) {
  const markup = todos.map(
    (todo) => `
        <li> 
            <button class="btns">
              <ion-icon name="stop-outline" class="non-comp"></ion-icon>
              <ion-icon name="checkbox" class="completed hidden"></ion-icon>
            </button>
            
               ${todo.todoName}
            <button class="btn-close" data-id="${todo.id}">
              <ion-icon name="close"></ion-icon>
            </button>
          </li>
  `
  );

  todoContainer.innerHTML = "";
  // todoContainer.insertAdjacentHTML("afterbegin", markup);
  todoContainer.innerHTML = markup.join("");
}

function createTodo(name) {
  const newTodo = {
    todoName: name,
    id: Date.now().toLocaleString(),
    completed: false,
  };

  todoLists.push(newTodo);
  // console.log(todoLists, newTodo);
  itemCount.innerHTML = todoLists.length;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!inputEl.value) return;
  createTodo(inputEl.value);
  renderTodo(todoLists);
  inputEl.value = "";
});

todoContainer.addEventListener("click", function (e) {
  const btn = e.target.closest(".btns");
  if (!btn) return;

  btn.querySelector(".non-comp").classList.toggle("hidden");
  btn.querySelector(".completed").classList.toggle("hidden");
});

function deleteTodo(id) {
  todoLists = todoLists.filter((todo) => todo.id !== id);
  // console.log(newTodos);
  renderTodo(todoLists);
  itemCount.innerHTML = todoLists.length;
}

todoContainer.addEventListener("click", function (e) {
  const detBtn = e.target.closest(".btn-close");

  if (!detBtn) return;

  const id = detBtn.dataset.id;
  deleteTodo(id);
});

deleteAllBtn.addEventListener("click", function () {
  todoLists.length = 0;

  renderTodo(todoLists);
  itemCount.innerHTML = todoLists.length;
});

renderTodo(todoLists);
itemCount.innerHTML = todoLists.length;
