import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import icon from './../../../../../../assets/img/Administrator/Editing/Modal/Item/icon.svg';


const Item = ({title, active}) => {
    return (
        <div className={style.item}>
            <p className="text-1 text-4_adaptive">{title}</p>
            {active ?
                <img src={icon} alt="icon" className={cn(style.btn, 'click_reaction')}/>
                :
                <p className={cn("text-8 text_purple click_reaction text-11_adaptive", style.text)}>Добавить</p>
            }
        </div>
    )
};

export default Item;