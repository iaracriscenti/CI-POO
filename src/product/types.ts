export enum Category {
    GOLOSINAS, GASEOSAS, BEBIDAS_ALCOHÓLICAS, LIMPIEZA, CIGARRILLOS, COMESTIBLES
}

export interface ProductType {
    name: string;
    brand: string;
    category: Category;
    presentation: string;
}