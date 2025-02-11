function addTodo() {
    const todo = document.getElementById("new-todo").value;
    if (todo.length < 3) {
        return alert("You must have at least 3 characters for your TODO")
    }
    const list = document.getElementById("list");
    const li = document.createElement("li");
    const text = document.createTextNode(todo);
    li.appendChild(text);

    list.appendChild(li)
}