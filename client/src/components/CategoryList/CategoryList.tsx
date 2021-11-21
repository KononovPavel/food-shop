import React, {useEffect, useState} from 'react';
import './category.scss'
import CategoryItem from "./CategoryItem/CategoryItem";
import {categoryModel} from "../../redux/models/categoryModel";
import axios from "axios";
import {CategoryURL} from "../../URLS/URL";

const CategoryList = () => {
    const [categories, setCategories] = useState<categoryModel[]>([]);
    useEffect(() => {
        axios.get(`${CategoryURL}`).then(
            (res)=> {
                setCategories(res.data.categories);
            }
        )
    }, [])
    return (
        <div className={"categoryList"}>
            {
                categories.length && categories.map((category: categoryModel, index: number) => <div key={index}>
                    <CategoryItem category={category}/>
                </div>)
            }
        </div>
    );
};

export default CategoryList;
