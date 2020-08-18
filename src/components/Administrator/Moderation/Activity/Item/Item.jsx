import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import BookmarkBlock from "../../../../Blocks/BookmarkBlock/BookmarkBlock";
import PriceBlock from "../../../../Blocks/PriceBlock/PriceBlock";

const Item = ({title, free, modal}) => {
	return (
		<div className={cn(style.item, 'item_1')}>
			<div className={style.block_4}>
				<BookmarkBlock title={title}/>
			</div>
			<div className={style.block_1}>
				<div className={style.block_3}>
					{free ? <p className={cn("text-7 text_pink text-4_adaptive", style.text_2)}>Бесплатное</p> :
						<PriceBlock/>}
				</div>
				<div className={cn(style.block_2, 'form__series-1_adaptive')}>
					<div className={cn("btn-2 btn btn_height-1", style.btn)} onClick={modal}>
						<p className="text-7">Отклонить</p>
					</div>
					<div className={cn("btn-1 btn btn_height-1 order_-1_adaptive", style.btn)}>
						<p className="text-7 text_white">Опубликовать</p>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Item;