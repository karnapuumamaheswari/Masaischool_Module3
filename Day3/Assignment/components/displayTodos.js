export function displayTodos(todos) {
    let html = '<ul style="list-style: none; padding: 0;">';
    todos.forEach(todo => {
        html += `<li class="todo-item ${todo.completed ? 'done' : ''}">
            <strong>${todo.title}</strong><br>
            <small>User: ${todo.userId} | Status: ${todo.completed ? 'Done' : 'Pending'}</small>
        </li>`;
    });
    html += '</ul>';
    return html;
}
