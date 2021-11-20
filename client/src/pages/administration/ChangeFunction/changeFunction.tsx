import React from 'react';
import {OptionType} from "../../../types/optionType";
import OptionItem from "./optionItem/optionItem";
import './changeFunction.scss'
import BackNavLink from "../../../components/backNavLink/backNavLink";

const ChangeFunction = () => {
    const options: OptionType[] = [
        {
            optionLink: "userList",
            name: "Список пользователей",
            photo: "https://www.shareicon.net/data/2015/07/04/64248_users_256x256.png"
        },
        {
            optionLink: "categoryList",
            name: "Список категорий",
            photo: "https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_960_720.png",
        },
        {
            optionLink: "productList",
            name: "Список продуктов",
            photo: "https://cdn-icons-png.flaticon.com/512/305/305100.png"
        },
        {
          optionLink:"orderList",
          name:"Список заказов",
          photo:"https://lh3.googleusercontent.com/proxy/BmqAc-89_03ToHgIFHNVQZbpC4PZ05f-eKbudlny2TbywvL8CjQu-NjLeLM3SQJtSaqS05--x5ChNvTJ8lVd37TqcUkRIFxY2xGpL_Y2Skdwby-5IP70wmfFniUaRmBlLSloSvfK"
        },

    ];

    return (

        <div className={"changeFunctionOptions"}>
            {
                options.map((option: OptionType, index: number) => <div key={index}>
                    <OptionItem optionLink={option.optionLink} name={option.name} photo={option.photo}/>
                </div>)
            }
        </div>
    );
};

export default ChangeFunction;
