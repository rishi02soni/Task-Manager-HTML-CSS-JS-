<script>
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement('li');
  li.className = 'task-item';

  li.innerHTML = `
    <span>${taskText}</span>
    <div class="actions">
      <button class="complete-btn">✓</button>
      <button class="delete-btn">✕</button>
    </div>
  `;

  li.querySelector('.complete-btn').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = '';
}
</script>
