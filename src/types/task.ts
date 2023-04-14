// export interface Task {
//   name: string;
//   isDone: boolean;
//   category?: Category;
// }
import { Category } from "./category.js";

export class Task {
  name: string;
  isDone: boolean;
  category?: Category;
  private _createdAt: Date;

  constructor(
    name: string,
    isDone: boolean,
    category: Category = Category.GENERAL
  ) {
    this.name = name;
    this.isDone = isDone;
    this.category = category;
    this._createdAt = new Date();
  }

  logCreationDate(extra?: string) {
    console.log(`Task został stworzony ${this._createdAt} ${extra || ""}`);
  }
}
