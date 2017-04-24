function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task == "")
    {
      alert("Enter something!!");
    }
    else {
      var todos = get_todos();
      todos.push(task);
      localStorage.setItem('todo', JSON.stringify(todos));
      document.getElementById('task').value = "";
      show();
    }

    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function update() {
      var id = this.getAttribute('id');
      var txt;
      var todos = get_todos();
      var updated = prompt("Please enter a value", todos);
      if (updated == null || updated == "") {
          txt = todos;
      } else {
          txt = updated;
      }
      document.getElementById("id").innerHTML = "<li>"+txt+"</li>";
  }

function show() {
    var todos = get_todos();

    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="update" id="' + i  + '">Update</button> <button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
    var buttons = document.getElementsByClassName('update');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', update);
    };
}



document.getElementById('add').addEventListener('click', add);
show();
