import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";


const Item = ({title, active}) => {
    return (
        <div className={cn(style.item, active && style.item_active ,'click_reaction')}>
            <p className={cn(style.text, "text-8")}>{title}</p>
        </div>
    )
};

export default Item;