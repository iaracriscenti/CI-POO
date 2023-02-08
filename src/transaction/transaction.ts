import { Product } from "../product/product";

export class Transaction {
    private _product: Product;
    private _amount: number;
    private _cost: number;

    constructor(prod: Product, amount: number, cost: number) {
        this._amount = amount;
        this._cost = cost;
        this._product = prod;
    }

    public set product(prod: Product) {
        this.product = prod;
    }

    public set amount(amount: number) {
        this.amount = amount;
    }

    public set cost(cost: number) {
        this.cost = cost;
    }

}