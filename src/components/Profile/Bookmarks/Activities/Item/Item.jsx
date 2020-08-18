import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import BookmarkBlock from "../../../../Blocks/BookmarkBlock/BookmarkBlock";
import PriceBlock from "../../../../Blocks/PriceBlock/PriceBlock";
import Bookmark from "../../../../Commons/Bookmark/Bookmark";
import {NavLink} from "react-router-dom";


const Item = ({title}) => {
	return (
		<div className={cn(style.item, 'item_1')}>
			<BookmarkBlock title={title} bookmark/>
			<div className={style.block_1}>
				<div className={style.block_2}>
					<PriceBlock typeSecond/>
				</div>
				<NavLink to='/buy' className={cn(style.btn, "btn btn-1 btn_height-1")}>
					<p className="text-7 text_white">Купить билет</p>
				</NavLink>
				<div className={cn(style.block_3, 'click_reaction')}>
					<Bookmark/>
				</div>
			</div>
		</div>
	)
};

export default Item;