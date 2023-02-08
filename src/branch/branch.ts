import { Product } from "../product/product";
import { Sale } from "../sale/sale";

export class Branch {
    private _name: string;
    private _products: Product[];
    private _employees: []; //to update
    private _sales: Sale[];
    private _purchases: []; //to update
    private _list_prices: []; //to update
    private _suppliers: []; //to update

    constructor(name: string, products: Product[], employees: [], sales: Sale[], purchases: [], list_prices: [], suppliers: []) {
        this._name = name;
        this._products = products;
        this._employees = employees;
        this._sales = sales;
        this._purchases = purchases;
        this._list_prices = list_prices;
        this._suppliers = suppliers;
    }

}