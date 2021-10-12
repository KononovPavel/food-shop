export interface ProductModel {
    _id:string,
    name:string,
    category:string,
    description:string,
    image:string,
    images:Array<string>,
    date:Date,
    count:number,
    price:number
}
