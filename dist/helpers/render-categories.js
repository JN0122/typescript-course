import { Category } from "../types/index.js";
/* Type never */
const handleCategoryChange = (category) => {
    if (category === Category.GENERAL)
        console.log(`Zmiana na general!`);
    else if (category === Category.GYM)
        console.log("Siłka");
    else if (category === Category.HOBBY)
        console.log("Hobby");
    else if (category === Category.WORK)
        console.log("Praca");
    else if (category === Category.SOCIAL)
        console.log("Społeczność");
    else {
        const never = category;
        console.log(never);
    }
};
const render = (categories, categoriesContainerElement, inputChangeCallback) => {
    categories.map((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        const labelElement = document.createElement("label");
        categoryElement.classList.add(`categories--${category}`);
        radioInputElement.setAttribute("type", "radio");
        radioInputElement.setAttribute("name", "category");
        radioInputElement.setAttribute("value", category);
        radioInputElement.setAttribute("id", `category-${category}`);
        radioInputElement.addEventListener("change", function () {
            inputChangeCallback(category);
            handleCategoryChange(category);
        });
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.classList.add("categories__label");
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
export default render;
