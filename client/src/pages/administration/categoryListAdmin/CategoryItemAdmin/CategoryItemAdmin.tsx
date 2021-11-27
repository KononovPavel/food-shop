import React, {useState} from 'react';
import './categoryItemAdmin.scss'
import {categoryModel} from "../../../../redux/models/categoryModel";
type PropsType = {
    category:categoryModel,
    deleteCategory:(id:string| undefined)=> void
}
const CategoryItemAdmin:React.FC<PropsType> = ({category, deleteCategory}) => {
    const [activeDel, setActiveDel] = useState(false)

    return (
        <div onMouseOver={()=> setActiveDel(true)} onMouseOut={()=> setActiveDel(false)} onClick={()=> deleteCategory(category._id)} className={"categoryItemAdmin"}>
              <div className={"category_blockAdmin"}>
                  <div>
                      {
                          activeDel ?
                              <img src="https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-38-450x450.png" alt="" width={200} height={125}/>
                              :  <img src={category.photo} alt="" width={200} height={125}/>
                      }
                  </div>

                  <div> <span>{category.link}</span></div>

              </div>
        </div>
    );
};

export default CategoryItemAdmin;
