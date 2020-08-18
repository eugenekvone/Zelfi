import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import BookmarkBlock from "../../../../Blocks/BookmarkBlock/BookmarkBlock";
import PriceBlock from "../../../../Blocks/PriceBlock/PriceBlock";

const Item = ({title, free, itemLink}) => {

	return (
		<div className={cn(style.item, 'item_1')}>
			<BookmarkBlock title={title} link={itemLink}/>
			<div className={style.block_1}>
				<div className={cn("btn-2 btn btn_height-1", style.btn)}>
					<p className="text-7">Список запросов</p>
				</div>
				{free ? <p className={cn("text-7 text_pink text-4_adaptive", style.text_2)}>Бесплатное</p> :
					<PriceBlock/>}
			</div>
		</div>
	)
};

export default Item;