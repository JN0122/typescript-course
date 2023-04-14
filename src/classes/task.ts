import { Category } from "../types/index.js";

interface Logger {
  logCreationDate: (addition: string) => void;
}

export class TaskClass implements Logger {
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

  // logCreationDate(extra: Date) { // error
  logCreationDate(extra: string) {
    console.log(`Task został stworzony ${this._createdAt} ${extra || ""}`);
  }
}
