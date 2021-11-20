export interface UserModel {
    _id:string
    firstName:string,
    lastName:string,
    email:string,
    address:address,
    role:string,
    ban:ban
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
