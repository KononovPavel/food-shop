import React from 'react';
import { NavLink } from 'react-router-dom';
import './categoryItem.scss'
type PropsType = {
    category:string
}
const CategoryItem:React.FC<PropsType> = ({category}) => {
    return (
        <div>
          <NavLink to={'/category/' + category}>{category}</NavLink>
        </div>
    );
};

export default CategoryItem;
