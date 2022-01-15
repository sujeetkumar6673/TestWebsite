import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { ProductsData } from "../models/product.model";


@Injectable()
export class ProductService {

    getProducts(): Product[] {
        return ProductsData;
    }

}