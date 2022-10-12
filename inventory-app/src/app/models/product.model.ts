export class Product{

    constructor(id:number, product_name:string, description: string, price: number, cantity: number) {
        this.id = id;
        this.product_name = product_name;
        this.description = description;
        this.price = price;
        this.cantity = cantity;
    }

    id: number;
    product_name: string;
    description: string;
    price: number;
    cantity: number;
}