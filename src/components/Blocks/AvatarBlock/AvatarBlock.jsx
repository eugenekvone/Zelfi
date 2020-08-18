import React from 'react';
import style from './AvatarBlock.module.scss';
import cn from "classnames";
import Rating from "../../Commons/Rating/Rating";
import Info from "../../Commons/Info/Info";
import {NavLink} from "react-router-dom";


const AvatarBlock = ({
	                  img,
	                  text_1,
	                  text_2,
	                  text_3,
	                  size,
	                  text_1_Class,
	                  text_2_Class,
	                  text_3_Class,
	                  rating,
	                  ratingSize,
	                  type,
	                  content,
	                  square,
	                  imgWrapClass_name,
	                  link,
	                  itemClassNew,
	                  info_none_adaptive
                  }) => {

	let imgWrapClass = style.img_wrap_middle;
	let itemClass = style.item_middle;
	let contentClass = null;
	let text_1_ClassNew = "text-7";
	let text_2_ClassNew = "text-11";
	let text_3_ClassNew = "text-11";

	if (text_1_Class) text_1_ClassNew = text_1_Class;
	if (text_2_Class) text_2_ClassNew = text_2_Class;
	if (text_3_Class) text_3_ClassNew = text_3_Class;

	switch (size) {
		case 'middle':
			imgWrapClass = style.img_wrap_middle;
			itemClass = style.item_middle;
			break;
		case 'big':
			imgWrapClass = style.img_wrap_big;
			itemClass = style.item_big;
			break;
		case 'low':
			imgWrapClass = style.img_wrap_low;
			itemClass = style.item_low;
			break;
		case 'large':
			imgWrapClass = style.img_wrap_large;
			itemClass = style.item_large;
			break;
		case 'small':
			imgWrapClass = style.img_wrap_small;
			itemClass = style.item_small;
			break;
		case 'extraBig':
			imgWrapClass = style.img_wrap_extraBig;
			itemClass = style.item_extraBig;
			break;
		default:
			break;
	}

	let block_1 = <p className={text_2_ClassNew}>{text_2}</p>;
	let block_2 = null;

	switch (content) {
		case 'around':
			contentClass = style.item_around;
			break;
		case 'evenly':
			contentClass = style.item_evenly;
			break;
		case 'between':
			contentClass = style.item_between;
			break;
		default:
			break;
	}

	if (type) {
		switch (type) {
			case 'rating':
				block_1 = <Rating size={ratingSize} rating={rating}/>;
				break;
			case 'organizer':
				block_1 = <div className="flex-ver-center">
					<p className={cn(style.text_organizer, 'text-5')}>Рейтинг организатора</p>
					<div className={style.rating_organizer}>
						<Rating rating={rating} size={'small'}/>
					</div>
				</div>;
				break;
			case 'info':
				block_1 = <div className={info_none_adaptive && 'none_adaptive'}>
					<div className={style.item_2}>
						<Info text={'+7 (999) 888-77-66'} opacity item={'phone'}/>
					</div>
					<div>
						<Info text={'example@mail.com'} opacity item={'mail'}/>
					</div>
				</div>;
				itemClass = style.item_info;
				break;
			case 'texts':
				block_2 = <p className={text_3_ClassNew}>{text_3}</p>
			default:
				break;
		}
	}

	return (
		<div className={style.block}>
			<div
				className={cn(style.img_wrap, imgWrapClass, 'img_center-wrap', square && style.img_wrap_square, imgWrapClass_name)}>
				{img ?
					<img src={img} alt="img" className='img_center-height'/>
					:
					<p className={cn(style.img__text, 'text-2')}>{text_1.substr(0, 1)}</p>
				}
			</div>
			<div className={cn(style.item_1, itemClass, contentClass, itemClassNew)}>
				{link ?
					<NavLink to={link} className={cn(text_1_ClassNew, 'click_reaction')}>{text_1}</NavLink>
					:
					<p className={text_1_ClassNew}>{text_1}</p>
				}
				{block_1}
				{block_2}
			</div>
		</div>
	)
};

export default AvatarBlock;