import { Product } from "./product";
import { Category, ProductType,  } from "./types";

const products: Product[] = [];

products[0] = new Product('Marlboro','Marlboro', Category.CIGARRILLOS,'x20');

export {products};