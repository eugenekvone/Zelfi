import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import style from './CarouselBlock.module.scss';
import cn from "classnames";
import Item from "./Item/Item";
import {NavLink} from "react-router-dom";

const CarouselBlock = ({items}) => {

	let itemsValue = 4;

	if (window.innerWidth < 1058) itemsValue = 3;
	if (window.innerWidth < 812) itemsValue = 2;
	if (window.innerWidth < 566) itemsValue = 1;

	return (
		<div className={cn(style.block, 'block_2')}>
			<div className={style.block__inner}>
				<div className={style.link_wrap}>
					<p className={cn(style.link__text, "text-1")}>Полная</p>
					<NavLink to="/rating" className={cn(style.link, 'text-7 link')}>таблица рейтинга</NavLink>
				</div>
				<OwlCarousel items={itemsValue} margin={20} nav>
					{items.map(i =>
						<div className="item">
							<Item name={i.name} avatar={i.avatar} points={i.points} plice={i.plice}/>
						</div>
					)}
				</OwlCarousel>
			</div>
		</div>
	)
};

export default CarouselBlock;