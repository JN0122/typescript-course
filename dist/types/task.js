// export interface Task {
//   name: string;
//   isDone: boolean;
//   category?: Category;
// }
import { Category } from "./category.js";
export class Task {
    constructor(name, isDone, category = Category.GENERAL) {
        this.name = name;
        this.isDone = isDone;
        this.category = category;
        this._createdAt = new Date();
    }
    logCreationDate(extra) {
        console.log(`Task został stworzony ${this._createdAt} ${extra || ""}`);
    }
}
