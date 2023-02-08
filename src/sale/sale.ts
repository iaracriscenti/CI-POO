import { paymentMethods } from "../payment-method";
import { MethodWithDiscount } from "../payment-method/payment-method";
import { AllPaymentMethods, MethodWithDiscountTypes, PaymentMethodType } from "../payment-method/types";
import { Transaction } from "../transaction/types";

export class Sale {
    private _payment_method: AllPaymentMethods;
    private _date: Date;
    private _transactions: Transaction[]

    constructor(pm: AllPaymentMethods, date: Date, transactions: Transaction[]) {
        this._payment_method = pm;
        this._date = date;
        this._transactions = transactions;
    }

    public getTotal():number {
        let total = 0;

        this._transactions.forEach((transaction) =>
        { total = total + transaction.amount * transaction.cost })

        const method = paymentMethods.find((m) => m.type === this._payment_method && m.operationType === 'SALE')

        if(method?.discount) {
            total = total*method.discount/100
        }

        return total;
    }

}