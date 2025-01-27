const todos = [
  {
    title: "Initial Todo",
    description: "This is the initial todo",
    complete: false,
  }
];


function addTodo(title, description) {
  const newTodo = {
    title: title,
    description: description,
    complete: false,
  };
  todos.push(newTodo);  // Add the new todo to the array
  console.log(`Added new todo: ${title}`);
}


function removeTodo(title) {
  const index = todos.findIndex(todo => todo.title === title);
  if (index !== -1) {
    todos.splice(index, 1);  // Remove the todo at the found index
    console.log(`Removed todo: ${title}`);
  } else {
    console.log(`Todo not found: ${title}`);
  }
}


function editTodo(oldTitle, newTitle, newDescription) {
  const index = todos.findIndex(todo => todo.title === oldTitle);
  if (index !== -1) {
    todos[index].title = newTitle;
    todos[index].description = newDescription;
    console.log(`Edited todo: ${oldTitle} -> ${newTitle}`);
  } else {
    console.log(`Todo not found: ${oldTitle}`);
  }
}


function markTodoComplete(title) {
  const todo = todos.find(todo => todo.title === title);
  if (todo) {
    todo.complete = true;
    console.log(`Marked todo as completed: ${title}`);
  } else {
    console.log(`Todo not found: ${title}`);
  }
}


function displayTodoLength() {
  const totalTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.complete).length;
  console.log(`Total tasks: ${totalTasks}, Completed tasks: ${completedTasks}`);
}


function app() {
  console.log('Welcome to the Todo Application');
  console.log('================================');
  

  addTodo("Learn JavaScript", "Study the basics of JavaScript");
  addTodo("Write Code", "Write a todo list application");

  removeTodo("Initial Todo");

  markTodoComplete("Learn JavaScript");

  editTodo("Write Code", "Write More Code", "Refactor the todo list application");

  displayTodoLength();
  

  console.log('Here is a list of your todos:');
  todos.forEach(todo => {
    console.log(`Title: ${todo.title}`);
    console.log(`Description: ${todo.description}`);
    console.log(`Completed: ${todo.complete}`);
    console.log('================================');
  });
}


app();
