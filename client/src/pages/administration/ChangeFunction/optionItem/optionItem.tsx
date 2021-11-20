import React from 'react';
import { NavLink } from 'react-router-dom';
import './optionItem.scss'

type PropsType = {
    optionLink: string,
    name: string,
    photo: string
}
const OptionItem: React.FC<PropsType> = (props: PropsType) => {


    return (
        <NavLink to={`/administration/${props.optionLink}`} className={"optionItem"}>
            <img style={{position:"absolute", zIndex:0}} src={props.photo} alt="" width={200} height={200}/>
            <span className={"optionItem_name"} style={{zIndex:1}}>{props.name}</span>
        </NavLink>
    );
};

export default OptionItem;
