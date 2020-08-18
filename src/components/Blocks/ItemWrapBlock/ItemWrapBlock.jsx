import React from 'react';
import style from './ItemWrapBlock.module.scss';
import Item from "./Item/Item";


const ItemWrapBlock = ({items}) => {
	return (
		<div className={style.block}>
			{items.map(i =>
				<Item title={i}/>
			)}
		</div>
	)
};

export default ItemWrapBlock;