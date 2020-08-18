import React from 'react';
import style from './TicketBlock.module.scss';
import cn from "classnames";
import Info from "../../Commons/Info/Info";

const TicketBlock = ({title, price, number, free, unlimited, id, ticketDelete, timeStart, timeEnd, date, index}) => {

	let itemDelete = () => {
		ticketDelete(id, index)
	}

	return (
		<div className={style.block}>
			<div className={style.block_1}>
				<p className={cn(style.text_1, "text-16")}>Дата и время</p>
				<div className={style.item_1}>
					<Info item='date_text' text={date}/>
				</div>
				<div className={style.item_1}>
					<Info item='time' text={'с ' + timeStart + ' до ' + timeEnd}/>
				</div>
			</div>
			<div className={style.block_2}>
				<div>
					<p className={cn(style.text_1, "text-16")}>Название</p>
					<p className="text-3">{title}</p>
				</div>
				<div>
					<p className={cn(style.text_1, "text-16")}>Количество</p>
					<p className="text-9 text_pink">{unlimited ? 'Безлимитно' : number}</p>
				</div>
				<div>
					<p className={cn(style.text_1, "text-16")}>Цена</p>
					<p className="text-9 text_pink">{free ? 'Бесплатно' : (price + ' ₽')} </p>
				</div>
				<div className="flex-ver-center">
					<div className={cn(style.btn, "btn-2 btn btn_height-1")} onClick={itemDelete}>
						<p className="text-7">Удалить билет</p>
					</div>
				</div>
			</div>
		</div>
	)
};

export default TicketBlock;