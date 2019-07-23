//fetch the content of the todo list in the local storage
function get_todos() {
    var todos = new Array;
    //get item, get the local storage key which is 'todo'
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
//add input todo list in the existing todo in the local storage
function add() {
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);
    //set item, create or update the local storage key
    localStorage.setItem('todo', JSON.stringify(todos));

    show();
    return false;
}
//clear the input fields after adding the todo list
function clearDefault(a) {
    if (a.defaultValue = a.value) { a.value = "0" }
};
//called when the user click the delete button and the item will be removed in the local storage
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    //at position id, remove 1 item
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}
//show the added todo list in an unordered list
//create and show the delete butoon, the delete button has an id corresponding to the todo listed
function show() {
    var todos = get_todos();

    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button type="button" class="btn btn-danger remove" id="' + i + '"> Delete </button> </li>';
    };
    html += '</ul>';
    //the html var has been assigend to the id=todos
    document.getElementById('todos').innerHTML = html;
    //when click the delete button, it will remove the todo in the todo list
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
//get the id which is add, and when it is click, it will call the add method, that will add a value in the local storage
document.getElementById('add').addEventListener('click', add);
show();