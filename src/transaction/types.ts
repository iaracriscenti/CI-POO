import { ProductType } from "../product/types";

export interface TransactionType {
    productId: ProductType['id'];
    amount: number;
    cost: number;
}