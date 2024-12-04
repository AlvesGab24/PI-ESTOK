document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const taskTime = document.getElementById('task-time');
    const taskList = document.getElementById('task-list');
    const task = taskInput.value;
    const date = taskDate.value;
    const time = taskTime.value;

    if (task && date && time) {
        const li = document.createElement('li');
        const taskDetails = document.createElement('div');
        taskDetails.classList.add('task-details');
        taskDetails.innerHTML = `<strong>${task}</strong><span>${date} ${time}</span>`;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });
        li.appendChild(taskDetails);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
        taskDate.value = '';
        taskTime.value = '';
    }
});
