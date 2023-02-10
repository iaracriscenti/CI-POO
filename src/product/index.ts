import { Product } from "./product";
import { Category, ProductType,  } from "./types";

const products: ProductType[] = [];

products[0] = new Product(1, 'Marlboro','Marlboro', Category.CIGARRILLOS,'x20');
products[1] = new Product(2, 'Marlboro','Marlboro', Category.CIGARRILLOS,'x10');

export {products};