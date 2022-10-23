const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    const todoTitle = document.querySelector('input');

    if (todoTitle.value != '') {
        addTodo(todoTitle.value);
    }

    todoTitle.value = '';
}

function addTodo(todo) {
    const todoList = document.querySelector('.todo-list__unordered-items');
    const newTodo = document.createElement('li');
    newTodo.innerHTML = `
        <span>${todo}</span>
        <span>
            <button><i class="fa-solid fa-check"></i></button>
            <button><i class="fa-sharp fa-solid fa-trash"></i></button>
        </span>
    `;

    todoList.appendChild(newTodo);
}