/* Number and string */
let age = 21;
age = 22;
age = 21.5;
// age = "Kuba";
let ageAsString = "dwadziescia jeden";
ageAsString = "dziesiec";
ageAsString = `${age}`;
console.log(ageAsString);
/* Functions */
const add = (v1, v2) => v1 + v2;
console.log(add(10, 5));
// console.log(add(10, "5"));
/* In practice */
const number2El = document.querySelector("#number1");
const number1El = document.querySelector("#number2");
const addButtonEl = document.querySelector("button");
addButtonEl.addEventListener("click", () => {
    const sum = add(Number(number1El.value), Number(number2El.value));
    console.log(sum);
});
/* Type inference */
let age2 = 29;
age2 = 23;
// age = "123";
let age3;
age3 = 21;
age3 = "abc";
const add2 = (v1, v2) => v1 + v2;
add2(1, 3);
add2("abc", "def");
add2(2, "abc");
const age4 = 29;
age4;
/* Union type */
const logAge = (age) => {
    console.log(`Hej mam ${age} lat`);
};
logAge(21);
logAge("dwadziescia jeden");
let test;
test = "Hej";
test = 1;
test = false;
// test = [];
/* Boolean */
const buyButtonEl = document.querySelector("#buy");
const calculatePrice = (originalPrice, hasDiscount) => {
    return hasDiscount ? originalPrice * 0.8 : originalPrice;
};
buyButtonEl.addEventListener("click", () => {
    const originalPrice = 50;
    const hasDiscount = new URLSearchParams(window.location.search).get("discount") === "true";
    console.log(calculatePrice(originalPrice, hasDiscount));
});
/* Array, Object, Optional Properties, Interface, Union type, Alias and Function */
// const tasks: string[] = ["Wyrzucić śmieci", "Pójść na siłownię", "Nakarmić koty"];
// const tasks: Array<string> = [
//   "Wyrzucić śmieci",
//   "Pójść na siłownię",
//   "Nakarmić koty",
// ];
import { Task, Category } from "./types/index.js";
import { changeTaskStatus, render as renderTasks, } from "./helpers/render-tasks.js";
import renderCategories from "./helpers/render-categories.js";
import { TaskClass } from "./classes/task.js";
const categories = [
    Category.GENERAL,
    Category.WORK,
    Category.GYM,
    Category.HOBBY,
    Category.SOCIAL,
];
let selectedCategory;
// const tasks: {name: string, isDone: boolean} = [
const tasks = [
    new Task("Wyrzucić śmieci", false),
    new Task("Pójść na siłownię", true, Category.GYM),
    new Task("Nakarmić koty", false, Category.GENERAL),
];
tasks.push(new Task("Zrobić obiad", false));
// tasks.push(1);
const taskContainerElement = document.querySelector(".tasks");
const taskNameInputElement = document.querySelector("#name");
const categoriesContainerElement = document.querySelector(".categories");
const addButtonElement = document.querySelector("#add-task");
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", function (e) {
    e.preventDefault();
    if (!taskNameInputElement.value)
        return;
    const newTask = new Task(taskNameInputElement.value, false, selectedCategory);
    addTask(newTask);
    newTask.logCreationDate("!!!");
    taskNameInputElement.value = "";
    renderTasks(tasks, taskContainerElement);
});
taskContainerElement.addEventListener("click", function (e) {
    const liElement = e.target.closest("li");
    if (!liElement)
        return;
    const checkboxElement = liElement.querySelector("input[type=checkbox]");
    changeTaskStatus(tasks, liElement, checkboxElement.checked);
});
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addTask(new Task("BOJOWE ZADANIE OD SZEFA", false, Category.WORK));
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, taskContainerElement);
let variable;
const task = ["zrobić klatkę", Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskIsDoneStatus = task[2];
addTask(new Task(taskName, taskIsDoneStatus, taskCategory));
// const newTask: TaskAsTuple = [false, Category.GENERAL, "Pojść na zakupy"];
renderTasks(tasks, taskContainerElement);
/* Type vs Interface

type TaskType = {
  name: string;
  isDone: boolean;
  category?: Category;
};

interface TaskInterface {
  name: string;
  isDone: boolean;
  category?: Category;
}

// let newTask: TaskType; // works too!
let newTask: TaskInterface;
newTask = {
  name: "Wywiesić pranie",
  isDone: true,
  createdAt: new Date(),
};

type Category = "work" | "hobby" | "general";
// interface Category = "work" | "hobby" | "general"; // not work
type CategoryAndNumber = Category | number;

// We can create multiple interfaces
interface TaskInterface {
  createdAt: Date;
}
*/
const taskClassInstance = new TaskClass("Wywiesić pranie", false, Category.GYM);
taskClassInstance.logCreationDate("!");
console.log(taskClassInstance);
