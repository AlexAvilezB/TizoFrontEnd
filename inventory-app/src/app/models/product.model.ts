export class Product{

    constructor(id:number, product_name:string, description: string, price: number) {
        this.id = id;
        this.product_name = product_name;
        this.description = description;
        this.price = price;
    }

    id: number;
    product_name: string;
    description: string;
    price: number;
}