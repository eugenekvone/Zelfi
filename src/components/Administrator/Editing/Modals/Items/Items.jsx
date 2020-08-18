import React from 'react';
import style from './Items.module.scss';
import cn from "classnames";
import Item from "./Item/Item";


const Items = () => {

    let initialState = {
        items: [
            {title: 'Спорт', active: true},
            {title: 'Еда', active: true},
            {title: 'Здоровье', active: false},
            {title: 'Автомобили', active: true},
            {title: 'Спорт', active: false},
            {title: 'Еда', active: true},
            {title: 'Здоровье', active: true},
            {title: 'Автомобили', active: true},
        ],
    };

    return (
        <div className={style.items}>
            {initialState.items.map(i => <Item title={i.title} active={i.active}/>)}
        </div>
    )
};

export default Items;