import { products } from "../product";
import { SinglePrice } from "./single-price";
import { SinglePriceType } from "./types"

const prices: SinglePrice[] = [];

prices[0] = new SinglePrice(products[0], new Date(), 120);
prices[1] = new SinglePrice(products[1], new Date(), 200);

export {prices};
