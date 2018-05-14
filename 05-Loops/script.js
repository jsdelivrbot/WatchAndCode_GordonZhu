
var todoList = {
  todos: [
    {
      todoText: 'item1',
      completed: false,
    },
    {
      todoText: 'item2',
      completed: false,
    },
    {
      todoText: 'item3',
      completed: false,
    },
  ],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!')
    } else {
      console.log('My todos:')
      for (let i = 0; i < this.todos.length; i++) {
        console.log(this.todos[i].todoText);
      }
    }
  },
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
}