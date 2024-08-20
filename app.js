// Get references to DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskValue = taskInput.value.trim();

  if (taskValue !== "") {
    // Create a new list item
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'task');
    li.textContent = taskValue;

    // Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('btn', 'btn-danger', 'btn-remove');
    removeBtn.textContent = 'Remove';

    li.appendChild(removeBtn);


    taskList.appendChild(li);

 
    taskInput.value = "";

    // Event listener to remove the task
    removeBtn.addEventListener('click', () => {
      li.remove();
    });
  }
}

addTaskBtn.addEventListener('click', addTask);

// Event listener for pressing Enter to add a task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
