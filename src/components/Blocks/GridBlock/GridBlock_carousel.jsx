import React from 'react';
import Item from "./Item/Item";
import OwlCarousel from "react-owl-carousel";

const GridBlock_carousel = ({items, changeFavorite}) => {

	let itemsValue = 4;

	if (window.innerWidth < 1058) itemsValue = 3;
	if (window.innerWidth < 812) itemsValue = 2;
	if (window.innerWidth < 566) itemsValue = 1;

	return (
		<div className={'block_1 carousel_nav-1'}>
			<OwlCarousel items={itemsValue} margin={20} nav>
				{items.map(i =>
					<div className="item">
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
					</div>
				)}
			</OwlCarousel>
		</div>
	)
};

export default GridBlock_carousel;