// export interface Task {
//   name: string;
//   isDone: boolean;
//   category?: Category;
// }
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
// export type Category = "general" | "work" | "gym" | "hobby" | "social";
export var Category;
(function (Category) {
    Category["GENERAL"] = "general";
    Category["WORK"] = "work";
    Category["GYM"] = "gym";
    Category["HOBBY"] = "hobby";
    Category["SOCIAL"] = "social";
})(Category || (Category = {}));
