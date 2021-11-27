import React, {useEffect, useState} from 'react';
import './category.scss'
import CategoryItem from "./CategoryItem/CategoryItem";
import {categoryModel} from "../../redux/models/categoryModel";
import axios from "axios";
import {CategoryURL} from "../../URLS/URL";
import {Spin} from "antd";

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
                categories.length? categories.map((category: categoryModel, index: number) => <div key={index}>
                    <CategoryItem category={category}/>
                </div>)
                    : <Spin style={{marginLeft: "20px"}}/>
            }
        </div>
    );
};

export default CategoryList;
