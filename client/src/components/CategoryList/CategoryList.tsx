import React from 'react';
import './category.scss'
import CategoryItem from "./CategoryItem/CategoryItem";

const CategoryList = () => {
    const Categories: string[] = ["Snack", "Горячие блюда", "Суши", "Закуски"]
    return (
        <div style={{display:"flex"}}>
            {
                Categories.map((category: string, index: number) => <div key={index}><CategoryItem category={category}/>
                </div>)
            }
        </div>
    );
};

export default CategoryList;
