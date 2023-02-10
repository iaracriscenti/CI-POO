import { Branch } from "./branch/branch";
import { paymentMethods } from "./payment-method";
import { MethodWithDiscountTypes } from "./payment-method/types";
import { products } from "./product";
import { Sale } from "./sale/sale";
import { prices } from "./single-price.ts";
import { SinglePrice } from "./single-price.ts/single-price";

const newBranch = new Branch(1, 'Kiosko Rosario', [],[], [], [], [], prices, []);

console.log('Branch', newBranch);

newBranch.addTransaction(1)
newBranch.addTransaction(1)
newBranch.addTransaction(1)
newBranch.addTransaction(2)

console.log('Branch with Transactions', newBranch);

const newSale = new Sale(1, MethodWithDiscountTypes.CASH, new Date(), []);

console.log('Sale', newSale)

newSale.addTransaction = newBranch.transactions;
const total = newSale.getTotal();

console.log('Sale with transactions', newSale)
console.log('Sale total', total)

newBranch.addSale = newSale;

console.log('Branch with Sale', newBranch);



