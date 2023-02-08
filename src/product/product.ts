import { Category } from "./types";

export class Product {
    private _name: string;
    private _brand: string;
    private _category: Category;
    private _presentation: string;

    constructor(name: string, brand: string, category: Category, presentation: string) {
        this._name = name;
        this._brand = brand;
        this._category = category;
        this._presentation = presentation;
    }
}