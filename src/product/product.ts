import { Category } from "./types";

export class Product {
    private _id: number;
    private _name: string;
    private _brand: string;
    private _category: Category;
    private _presentation: string;

    constructor(id: number, name: string, brand: string, category: Category, presentation: string) {
        this._id = id;
        this._name = name;
        this._brand = brand;
        this._category = category;
        this._presentation = presentation;
    }

    public get id(): number {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get brand(): string {
        return this._brand;
    }

    public get category(): Category {
        return this._category;
    }

    public get presentation(): string {
        return this._presentation;
    }
}