
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
        if (this.todos[i].completed === true) {
          console.log('(X)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
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
  },
  toggleAll: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    if (completedTodos === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
      this.displayTodos();
    } else {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
      this.displayTodos();
    }
  },
}



var handlers = {
  displayTodos: () => todoList.displayTodos(),
  addTodo: () => {
    const addTodoInput = document.getElementById('addTodoInput');
    todoList.addTodo(addTodoInput.value);
    addTodoInput.value = '';
  },
  changeTodo: () => {
    const changeTodoInputPosition = document.getElementById('changeTodoInputPosition');
    const changeTodoInput = document.getElementById('changeTodoInput');
    todoList.changeTodo(changeTodoInputPosition.valueAsNumber - 1, changeTodoInput.value);
    changeTodoInputPosition.value = '';
    changeTodoInput.value = '';
  },
  deleteTodo: () => {
    const deleteTodoInputPosition = document.getElementById('deleteTodoInputPosition');
    todoList.deleteTodo(deleteTodoInputPosition.valueAsNumber - 1);
    deleteTodoInputPosition.value = '';
  },
  toggleCompleted: () => {
    const toggleCompletedInputPosition = document.getElementById('toggleCompletedInputPosition');
    todoList.toggleCompleted(toggleCompletedInputPosition.valueAsNumber - 1);
    toggleCompletedInputPosition.value = '';
  },
  toggleAll: () => todoList.toggleAll(),
};