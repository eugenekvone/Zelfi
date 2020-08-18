import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import BookmarkBlock from "../../../../Blocks/BookmarkBlock/BookmarkBlock";
import CopyEventBlock from "../../../../Blocks/CopyEventBlock/CopyEventBlock";
import {NumbFormat} from "../../../../../utils/NumbFormat";

const Item = ({title, BtnCopy, url}) => {
	return (
		<div className={cn(style.block, 'item_1')}>
			<BookmarkBlock title={title} link={url + 'activity'}/>
			<div className={style.inner}>
				<div className={style.block_1}>
					<p className="text-11 text_right">Стоимость:</p>
					<p className="text-23">от {NumbFormat(1000)}</p>
					<p className="text-11 text_right">Куплено билетов:</p>
					<p className="text-23">124 / 160</p>
					<p className="text-11 text_right">Осталось:</p>
					<p className="text-23">27</p>
				</div>
				<div>
					<CopyEventBlock BtnCopy={BtnCopy}/>
				</div>
			</div>
		</div>
	)
};

export default Item;