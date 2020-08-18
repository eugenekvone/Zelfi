import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import BookmarkBlock from "../../../../Blocks/BookmarkBlock/BookmarkBlock";
import PriceBlock from "../../../../Blocks/PriceBlock/PriceBlock";
import icon from "../../../../../assets/img/Control/Modernization/icon.svg";


const Item = ({title, error}) => {
	return (
		<div className={cn(style.block, 'item_1 flex-column ')}>
			<div className={style.block_3}>
				<BookmarkBlock title={title}/>
				<div className={style.inner}>
					<div className={style.block_4}>
						<PriceBlock disabled/>
					</div>
					<div>
						{!error ?
							<div className="btn btn-6 btn_height-1 click_disabled">
								<p className="text-7">На модерации</p>
							</div>
							:
							<div className={style.block_1}>
								<div className="btn-6 btn_height-1 flex-all-center">
									<img src={icon} alt="icon" className='btn__icon_left'/>
									<p className="text-7 text_pink">Отклонено</p>
								</div>
								<div className="btn-1 btn btn_height-1">
									<p className="text-7 text_white">Редактировать</p>
								</div>
							</div>
						}
					</div>
				</div>
			</div>
			{error ?
				<div className="flex-column">
					<div className={style.block_2}>
						<p className={cn(style.text, "text-1 text_pink")}>Причина:</p>
						<p className="text-1">Неверное оформление</p>
					</div>
					<div className={style.block_2}>
						<p className="text-1">Необходимо дооформить раздел описание.</p>
					</div>
				</div>
				: null}
		</div>
	)
};

export default Item;