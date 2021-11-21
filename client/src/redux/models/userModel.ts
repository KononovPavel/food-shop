import {OrderModel} from "./orderModel";

export interface UserModel {
    _id:string
    firstName:string,
    lastName:string,
    email:string,
    address:address,
    role:string,
    ban:ban,
    orders:OrderModel[],
}

export interface address {
    street:string,
    city:string,
    country:string
}

export interface ban {
    status:boolean,
    reason:string
}
