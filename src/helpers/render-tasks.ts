import { Task } from "../types/todo";

export const changeTaskStatus = (
  tasks: Task[],
  liElement: HTMLElement,
  isDone: boolean
) => {
  const taskLabel: HTMLElement = liElement.querySelector("label");
  const checkboxLabel: HTMLInputElement = liElement.querySelector(
    "input[type=checkbox]"
  );
  const currentTask = tasks.find((task) => task.name === taskLabel.innerText);

  if (!currentTask || !checkboxLabel || !taskLabel) return;

  checkboxLabel.checked = isDone;
  currentTask.isDone = isDone;
  if (isDone) taskLabel.classList.add("task__label--done");
  else taskLabel.classList.remove("task__label--done");
};

export const render = function (
  tasks: Task[],
  taskContainerElement: HTMLElement
) {
  taskContainerElement.innerHTML = "";

  tasks.map(function (task, i) {
    const taskElement: HTMLElement = document.createElement("li");
    const labelElement: HTMLLabelElement = document.createElement("label");
    const checkboxElement: HTMLInputElement = document.createElement("input");
    const id: string = `task-${i}`;

    labelElement.innerText = task.name;
    labelElement.setAttribute("for", id);
    labelElement.classList.add("task__label");

    checkboxElement.setAttribute("type", "checkbox");
    checkboxElement.setAttribute("name", task.name);
    checkboxElement.setAttribute("id", id);
    console.log(task.category);
    if (task.category) {
      taskElement.classList.add(`task--${task.category}`);
    } else {
      taskElement.classList.add(`task--none`);
    }
    taskElement.appendChild(checkboxElement);
    taskElement.appendChild(labelElement);

    changeTaskStatus(tasks, taskElement, task.isDone);

    taskContainerElement.appendChild(taskElement);
  });
};
