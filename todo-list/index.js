let tasks = [
  {
    id: '1',
    title: 'Task 1',
    description: 'desc 1',
    dueDate: '2025-03-19',
    priority: 'low',
    isDone: false,
    category: 'Uncategorized',
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'desc 2',
    dueDate: '2025-03-20',
    priority: 'medium',
    isDone: false,
    category: 'Uncategorized',
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'desc 3',
    dueDate: '2025-03-21',
    priority: 'high',
    isDone: true,
    category: 'Uncategorized',
  },
];

const taskList = document.querySelector('ul.task-list');
const categoryList = document.querySelector('ul.categories');

function renderAllTasks() {
  for (let each of tasks) {
    taskList.appendChild(renderTask(each));
  }
}

function renderTask(task) {
  let li = document.createElement('li');
  li.setAttribute('data-id', task.id);

  let taskItem = document.createElement('div');
  taskItem.classList.add('task-item');
  switch (task.priority) {
    case 'low':
      taskItem.classList.add('priority-low');
      break;
    case 'medium':
      taskItem.classList.add('priority-medium');
      break;
    case 'high':
      taskItem.classList.add('priority-high');
      break;
  }

  let info = document.createElement('div');
  info.classList.add('info');

  let left = document.createElement('div');

  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = task.id;
  checkbox.addEventListener('change', function () {
    console.log(this.closest('li').getAttribute('data-id'));
  });

  let label = document.createElement('label');
  label.setAttribute('for', task.id);
  label.innerText = task.title;

  let right = document.createElement('div');

  let dueDate = document.createElement('span');
  dueDate.innerText = task.dueDate;

  let operations = document.createElement('div');
  operations.classList.add('operations');

  let detailButton = document.createElement('button');
  detailButton.innerText = 'Detail';
  detailButton.addEventListener('click', function () {
    console.log(this.closest('li').getAttribute('data-id'));
  });

  let editButton = document.createElement('button');
  editButton.innerText = 'Edit';
  editButton.addEventListener('click', function () {
    console.log(this.closest('li').getAttribute('data-id'));
  });

  li.appendChild(taskItem);

  taskItem.appendChild(info);
  taskItem.appendChild(operations);

  info.appendChild(left);
  info.appendChild(right);

  left.appendChild(checkbox);
  left.appendChild(label);

  right.appendChild(dueDate);

  operations.appendChild(detailButton);
  operations.appendChild(editButton);

  return li;
}

function getAllCategories() {
  let categories = new Set();
  for (let each of tasks) {
    categories.add(each.category);
  }

  return categories;
}

function renderCategory(name) {
  let li = document.createElement('li');
  li.setAttribute('data-category', name);

  let icon = document.createElement('span');
  icon.classList.add('material-symbols-outlined');
  icon.innerText = ' folder ';

  let categoryName = document.createElement('span');
  categoryName.innerText = name;

  li.appendChild(icon);
  li.appendChild(categoryName);

  return li;
}

function renderAllCategories() {
  let categories = getAllCategories();

  for (let each of categories) {
    categoryList.appendChild(renderCategory(each));
  }
}

renderAllTasks();
renderAllCategories();
