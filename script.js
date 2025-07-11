let totalGoals = 0;
let completedGoals = 0;

function addGoal() {
  const input = document.getElementById('goal-input');
  const text = input.value.trim();
  if (!text) {
    alert("Please enter a goal!");
    return;
  }

  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onchange = updateProgress;

  const span = document.createElement('span');
  span.textContent = text;

  li.appendChild(checkbox);
  li.appendChild(span);

  document.getElementById('goal-list').appendChild(li);
  input.value = '';

  totalGoals++;
  updateProgress();
}

function updateProgress() {
  const checkboxes = document.querySelectorAll('#goal-list input[type="checkbox"]');
  completedGoals = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) completedGoals++;
  });

  const percent = totalGoals === 0 ? 0 : Math.round((completedGoals / totalGoals) * 100);
  document.getElementById('progress-bar').style.width = percent + '%';
  document.getElementById('progress-text').textContent = `Progress: ${percent}%`;

  const msg = document.getElementById('complete-message');
  if (completedGoals === totalGoals && totalGoals > 0) {
    msg.classList.remove('hidden');
  } else {
    msg.classList.add('hidden');
  }
}
