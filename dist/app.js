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
import { changeTaskStatus, render } from "./helpers/render-tasks.js";
import renderCategories from "./helpers/render-categories.js";
const categories = ["general", "work", "gym", "hobby"];
let selectedCategory;
// const tasks: {name: string, isDone: boolean} = [
const tasks = [
    {
        name: "Wyrzucić śmieci",
        isDone: false,
    },
    {
        name: "Pójść na siłownię",
        isDone: true,
        category: "gym",
    },
    {
        name: "Nakarmić koty",
        isDone: false,
        category: "general",
    },
];
tasks.push({ name: "Zrobić obiad", isDone: false });
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
    addTask({
        name: taskNameInputElement.value,
        isDone: false,
        category: selectedCategory,
    });
    taskNameInputElement.value = "";
    render(tasks, taskContainerElement);
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
addTask({ name: "BOJOWE ZADANIE OD SZEFA", isDone: false, category: "work" });
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, taskContainerElement);
