import { Category } from "../types/index.js";
export class TaskClass {
    constructor(name, isDone, category = Category.GENERAL) {
        this.name = name;
        this.isDone = isDone;
        this.category = category;
        this._createdAt = new Date();
    }
    // logCreationDate(extra: Date) { // error
    logCreationDate(extra) {
        console.log(`Task został stworzony ${this._createdAt} ${extra || ""}`);
    }
}
