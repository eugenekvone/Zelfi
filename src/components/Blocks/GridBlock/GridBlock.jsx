import React from 'react';
import style from './GridBlock.module.scss';
import cn from "classnames";
import Item from "./Item/Item";
import btn__icon from "../../../assets/img/Blocks/Block_1/btn__icon.svg";
import Paginator from "../../Commons/Paginator/Paginator";

const GridBlock = ({items, changeFavorite, pagination}) => {
	return (
		<div className={cn(style.block, 'block_1')}>
			<div className={style.block__inner}>
				{items.map(i =>
					<Item title={i.title}
					      img={i.img}
					      address={i.address}
					      date={i.date}
					      time={i.time}
					      organizer={i.organizer}
					      favorite={i.favorite}
					      free={i.free}
					      changeFavorite={changeFavorite}
					      id={i.id}/>
				)}
			</div>
			{!pagination ?
				<div className={cn(style.btn, "btn-2 btn btn_height-1")}>
					<img src={btn__icon} alt="btn__icon" className="btn__icon_left"/>
					<p className="text-7">Показать ещё</p>
				</div>
				:
				<Paginator/>
			}
		</div>
	)
};

export default GridBlock;