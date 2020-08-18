import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import BookmarkBlock from "../../../../Blocks/BookmarkBlock/BookmarkBlock";
import CopyEventBlock from "../../../../Blocks/CopyEventBlock/CopyEventBlock";
import Btn_openAll from "../../../../Commons/Btns/BtnOpenAll/BtnOpenAll";
import Rating from "../../../../Commons/Rating/Rating";


const Item = ({title, BtnCopy}) => {
	return (
		<div className={cn(style.block, 'item_1')}>
			<BookmarkBlock title={title}/>
			<div className={style.inner}>
				<div className={style.block_1}>
					<div className={style.item}>
						<Btn_openAll number={192} item_id={'5'}/>
					</div>
					<div className="flex-right flex-left_adaptive">
						<Rating rating={4} size={'middle'}/>
					</div>
				</div>
				<div>
					<CopyEventBlock BtnCopy={BtnCopy}/>
				</div>
			</div>
		</div>
	)
};

export default Item;