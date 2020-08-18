import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import BookmarkBlock from "../../../../Blocks/BookmarkBlock/BookmarkBlock";
import ModalWrapBlock from "../../../../Blocks/ModalWrapBlock/ModalWrapBlock";
import icon from "../../../../../assets/img/Administrator/Finance/Activity/Item/icon.svg";

const Item = ({title, free, modal}) => {

	let component_1 = () => (
		<div className={style.inner_1}>
			<div>
				<p className={cn(style.text_1, "text-11")}>Сумма пожертвований:</p>
				<p className="text-16">25 785 ₽</p>
			</div>
			<div>
				<p className={cn(style.text_1, "text-11")}>Сумма проданных билетов</p>
				<p className="text-16">25 785 ₽</p>
			</div>
			<div>
				<p className={cn(style.text_1, "text-11")}>Возвращено:</p>
				<p className="text-16">2 565 ₽</p>
			</div>
			<div>
				<p className={cn(style.text_1, "text-11")}>Комиссия Zelfi:</p>
				<p className="text-16">2 565 ₽</p>
			</div>
		</div>
	)

	let component_2 = () => (
		<div className={style.inner_2}>
			<div className={cn(style.btn, "btn-2 btn btn_height-1")} onClick={modal}>
				<img src={icon} alt="icon" className="btn__icon_left"/>
				<p className="text-7">Возврат средств</p>
			</div>
		</div>
	)

	return (
		<div className={cn(style.item, 'item_1')}>
			<div className={style.block_3}>
				<BookmarkBlock title={title}/>
			</div>
			<div className={style.block_1}>
				<p className={cn("text-11 active_adaptive", style.text_2)}>Стоимость:</p>
				{free ? <p className="text-16">от 1 250 ₽</p> :
					<p className="text-7 text_pink text-4_adaptive">Бесплатное</p>}
			</div>
			<div className={style.block_2}>
				<ModalWrapBlock component_1={component_1} component_2={component_2} img/>
			</div>
		</div>
	)
};

export default Item;