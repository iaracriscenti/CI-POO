import { Product } from "../product/product";
import { ProductType } from "../product/types";

export class Transaction {
    private _id: number;
    private _productId: ProductType['id'];
    private _amount: number;
    private _cost: number;

    constructor(id: number, prod: ProductType['id'], amount: number, cost: number) {
        this._id = id;
        this._amount = amount;
        this._cost = cost;
        this._productId = prod;
    }

    public get productId() {
        return this._productId;
    }

    public get amount() {
        return this._amount;
    }

    public get cost() {
        return this._cost;
    }

    public set productId(prod: ProductType['id']) {
        this._productId = prod;
    }

    public set amount(amount: number) {
        this._amount = amount;
    }

    public set cost(cost: number) {
        this._cost = cost;
    }

}