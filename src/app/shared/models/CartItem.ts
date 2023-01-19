import { Products } from "./product";

export class CartItem {
   constructor(product: Products) {
       this.product = product;
    }


    product: Products;
    quantity: number = 1;

    //cambie de Number a number

    get price(): number {
        return this.product.price = this.quantity;
    }
}