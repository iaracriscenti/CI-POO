import { paymentMethods } from "../payment-method";
import { MethodWithDiscount } from "../payment-method/payment-method";
import { AllPaymentMethods, MethodWithDiscountTypes, PaymentMethodType } from "../payment-method/types";
import { Transaction } from "../transaction/transaction";
import { TransactionType } from "../transaction/types";

export class Sale {
    private _id: number;
    private _payment_method: AllPaymentMethods;
    private _date: Date;
    private _transactions: TransactionType[];

    constructor(id: number, pm: AllPaymentMethods, date: Date, transactions: TransactionType[]) {
        this._id = id;
        this._payment_method = pm;
        this._date = date;
        this._transactions = transactions;
    };

    public set addTransaction(transaction: Transaction[]) {
        this._transactions = transaction;
    };

    public get transactions() {
        return this._transactions;
    };

    public getTotal():number {
        let total = 0;

        this._transactions.forEach((transaction) =>
        { total = total + transaction.amount * transaction.cost })

        const method = paymentMethods?.find((m) => m.type === this._payment_method && m.operationType === 'SALE')

        if(method?.discount) {
            total = total*(1- method.discount/100);
        }

        return total;
    }

}