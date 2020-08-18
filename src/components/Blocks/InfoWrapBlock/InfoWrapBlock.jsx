import React from 'react';
import style from './InfoWrapBlock.module.scss';
import Item from "./Item/Item";


const InfoWrapBlock = ({items}) => {
	return (
		<div className={style.block}>
			{items.map(i =>
				<Item big={i.big} title={i.title} ruble={i.ruble} value={i.value}/>
			)}
		</div>
	)
};

export default InfoWrapBlock;