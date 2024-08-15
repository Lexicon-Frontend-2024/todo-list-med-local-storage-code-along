console.log('Hejhej');
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM loaded Javascript');
  const todoInput = document.getElementById('todo-input');
  const addTodoButton = document.getElementById('add-todo');
  const todoList = document.getElementById('todo-list');

  function loadTodos() {
    todoList.innerHTML = '';

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      console.log(li);
      li.textContent = todo;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'delete';
      deleteButton.addEventListener('click', function () {
        deleteTodo(index);
      });
      li.appendChild(deleteButton);
      console.log(li);

      todoList.appendChild(li);
    });
  }

  function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
      const todos = JSON.parse(localStorage.getItem('todos')) || [];
      todos.push(todoText);
      console.log(todos);
      localStorage.setItem('todos', JSON.stringify(todos));
      todoInput.value = '';
      loadTodos();
    }
  }

  function deleteTodo(index) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    loadTodos();
  }
  addTodoButton.addEventListener('click', addTodo);
});
