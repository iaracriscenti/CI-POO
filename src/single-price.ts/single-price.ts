import { Product } from "../product/product";
import { ProductType } from "../product/types";
import { SinglePriceType } from "./types";

export class SinglePrice extends Product implements SinglePriceType {
    _date: Date;
    _price: number;

    constructor(product: ProductType, date: Date, price: number) {
        super(product.id, product.name, product.brand, product.category, product.presentation);
        this._date = date;
        this._price = price
    };

};