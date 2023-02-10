import { Product } from "../product/product";
import { Sale } from "../sale/sale";
import { SinglePrice } from "../single-price.ts/single-price";
import { SinglePriceType } from "../single-price.ts/types";
import { Transaction } from "../transaction/transaction";
import { TransactionType } from "../transaction/types";

export class Branch {
    private _id: number;
    private _name: string;
    private _products: []; //to update with STOCK
    _actualTransaction: Transaction[];
    private _employees: []; //to update
    private _sales: Sale[];
    private _purchases: []; //to update
    private _list_prices: SinglePrice[];
    private _suppliers: []; //to update

    constructor(id: number, name: string, products: [], actualTransaction: Transaction[], employees: [], sales: Sale[], purchases: [], list_prices: SinglePrice[], suppliers: []) {
        this._id = id;
        this._name = name;
        this._products = products;
        this._actualTransaction = actualTransaction;
        this._employees = employees;
        this._sales = sales;
        this._purchases = purchases;
        this._list_prices = list_prices;
        this._suppliers = suppliers;
    }

    public get transactions() {
        return this._actualTransaction;
    };

    public addTransaction(prodId: number) {
        const transaction = this._actualTransaction.find((item) => item.productId === prodId)
        if(transaction) {
            transaction.amount ++;
        } else {
            const price = this._list_prices.find((item) => item.id === prodId)?._price;
            if(price) {
                const newTransaction = new Transaction(100, prodId, 1, price);
                this._actualTransaction.push(newTransaction);
            };
        }
    };

    public set addSale(sale: Sale) {
        this._sales.push(sale);
    };

    // public set list_prices(prices: SinglePriceType[]) {
    //     this._list_prices.push(prices);
    // };
}