// --- Add a task when button is clicked ---
function addTask() {
  var input = document.getElementById('new-task');
  var text = input.value;

  // Don't add if the input is empty
  if (text == '') {
    return;
  }

  // Create a new list item
  var li = document.createElement('li');
  li.className = 'todo-item';

  // Add the checkbox, task text, and delete button inside the item
  li.innerHTML =
    '<div class="check-box" onclick="toggleDone(this)"></div>' +
    '<span class="todo-text">' + text + '</span>' +
    '<button class="del-btn" onclick="deleteTask(this)">×</button>';

  // Add the item to the list
  document.getElementById('todo-list').appendChild(li);

  // Clear the input box
  input.value = '';

  // Update the counter
  updateCount();
}

// --- Mark a task as done or not done ---
function toggleDone(checkbox) {
  var item = checkbox.parentElement;

  if (item.className == 'todo-item') {
    item.className = 'todo-item done';
  } else {
    item.className = 'todo-item';
  }

  updateCount();
}

// --- Delete a task ---
function deleteTask(button) {
  var item = button.parentElement;
  item.remove();
  updateCount();
}

// --- Update the "X left" counter and progress bar ---
function updateCount() {
  var allItems = document.querySelectorAll('.todo-item');
  var doneItems = document.querySelectorAll('.todo-item.done');
  var remaining = allItems.length - doneItems.length;

  document.getElementById('count-badge').textContent = remaining + ' left';

  // Update progress bar
  var total = allItems.length;
  var pct = 0;
  if (total > 0) {
    pct = Math.round((doneItems.length / total) * 100);
  }
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-label').textContent = pct + '%';
}

// --- Add task when Enter key is pressed ---
document.getElementById('new-task').addEventListener('keydown', function(e) {
  if (e.key == 'Enter') {
    addTask();
  }
});

// --- Add task when + button is clicked ---
document.getElementById('add-btn').addEventListener('click', function() {
  addTask();
});