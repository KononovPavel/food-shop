import React from 'react';
import { NavLink } from 'react-router-dom';
import './categoryItem.scss'
import {categoryModel} from "../../../redux/models/categoryModel";
type PropsType = {
    category:categoryModel
}
const CategoryItem:React.FC<PropsType> = ({category}) => {
    return (
        <div className={"categoryItem"}>
          <NavLink  className={"category"} to={'/category/' + category.link}>
              <div className={"category_block"}>
                  <img src={category.photo} alt="" width={200} height={125}/>
                  <div> <span>{category.link}</span></div>
              </div>
          </NavLink>
        </div>
    );
};

export default CategoryItem;
