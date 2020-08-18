import React from 'react';
import style from './CarouselIframeBlock.module.scss';
import cn from "classnames";
import icon from './../../../assets/img/Blocks/Block_4/icon.svg';
import img_1 from './../../../assets/img/initialState/Block_4/img_1.jpg';
import img_2 from './../../../assets/img/initialState/Block_4/img_2.jpg';
import OwlCarousel from "react-owl-carousel";

const CarouselIframeBlock = ({items, imgs}) => {

	let itemsValue = items;

	if (window.innerWidth < 812) itemsValue = 1;

	return (
		<div className='carousel_nav-1'>
			<OwlCarousel items={itemsValue} margin={23} nav dots={false}>
				{!imgs &&
				<div className={cn(style.item, "item img_center-wrap")}>
					<img src={img_1} alt="img_1" className="img_center"/>
				</div>
				}
				{!imgs &&
				<div className={cn(style.item, "item img_center-wrap")}>
					<img src={img_2} alt="img_2" className="img_center"/>
					<div className={cn(style.btn, 'click_reaction')}>
						<img src={icon} alt="icon"/>
					</div>
				</div>
				}
				{!imgs &&
				<div className={cn(style.item, "item img_center-wrap")}>
					<img src={img_1} alt="img_1" className="img_center"/>
				</div>
				}
				{imgs && imgs.map(img =>
					<div className={cn(style.item, "item img_center-wrap")}>
						{(typeof (img) == 'object') ?
							<iframe width="560" height="315" src={img} frameBorder="0" allowFullScreen></iframe>
							:
							<img src={img} alt="img_1" className="img_center"/>
						}
					</div>
				)}
			</OwlCarousel>
		</div>
	)
};

export default CarouselIframeBlock;