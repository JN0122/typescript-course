import { Category } from "../types/todo";

const render = (
  categories: Category[],
  categoriesContainerElement: HTMLElement,
  inputChangeCallback: (category: Category) => void
) => {
  categories.map((category) => {
    const categoryElement: HTMLElement = document.createElement("li");
    const radioInputElement: HTMLInputElement = document.createElement("input");
    const labelElement: HTMLLabelElement = document.createElement("label");

    categoryElement.classList.add(`categories--${category}`);

    radioInputElement.setAttribute("type", "radio");
    radioInputElement.setAttribute("name", "category");
    radioInputElement.setAttribute("value", category);
    radioInputElement.setAttribute("id", `category-${category}`);
    radioInputElement.addEventListener("change", function () {
      inputChangeCallback(category);
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
