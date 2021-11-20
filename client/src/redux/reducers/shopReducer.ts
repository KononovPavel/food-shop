import {categoryModel} from "../models/categoryModel";
import {ProductModel} from "../models/productModel";
import {Dispatch} from "redux";
import axios from "axios";
import {CategoryURL, ProductURL} from "../../URLS/URL";


let initStateType = {
    categories: [] as categoryModel[],
    products: [] as ProductModel[],

}
export type shopStateType = typeof initStateType

type setProducts = {
    type: "SET_PRODUCTS",
    payload: ProductModel[]
}

type setCategories = {
    type: "SET_CATEGORIES",
    payload: categoryModel[]
}


type createProduct = {
    type: "CREATE_PRODUCT",
    product: ProductModel,
}

type deleteProduct = {
    type: "DELETE_PRODUCT",
    id: string
}
type createCategory = {
    type: "CREATE_CATEGORY",
    category: categoryModel
}

type deleteCategory = {
    type: "DELETE_CATEGORY",
    id: string
}

type shopAction = setProducts |   setCategories

export const shopReducer = (state: shopStateType = initStateType, action: shopAction): shopStateType => {

    switch (action.type) {
        case "SET_PRODUCTS": {
            return {...state, products: action.payload}
        }
        case "SET_CATEGORIES": {
            return {...state, categories: action.payload}
        }
        default : {
            return state
        }
    }
}

const setProducts = (products: ProductModel[]): setProducts => ({type: "SET_PRODUCTS", payload: products});
const setCategories = (categories: categoryModel[]): setCategories => ({type: "SET_CATEGORIES", payload: categories})

export const getProducts = () => async (dispatch: Dispatch) => {
    const response = await axios.get(ProductURL).then(res => res.data);
     dispatch(setProducts(response.products))
}

export const getCategories = () => async (dispatch: Dispatch) => {
    const response = await axios.get(CategoryURL).then(res=> res.data);
    dispatch(setCategories(response.categories))
}
