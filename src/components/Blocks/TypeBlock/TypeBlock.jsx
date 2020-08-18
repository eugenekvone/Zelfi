import React from 'react';
import style from './TypeBlock.module.scss';
import Item from "./Item/Item";

const TypeBlock = ({items, url, secondType}) => {
	return (
		<div className={style.block}>
			{items.map(i =>
				<div className={style.item}>
					<Item icon={i.icon}
					      secondType={secondType}
					      icon_active={i.icon_active}
					      title={i.title}
					      quantity={i.quantity}
					      url={url}
					      itemUrl={i.url}/>
				</div>
			)}
		</div>
	)
};

export default TypeBlock;