import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import icon_1 from "../../../../assets/img/Blocks/Block_1/Item/icon_1.svg";
import icon_2 from "../../../../assets/img/Blocks/Block_1/Item/icon_2.svg";
import icon_3 from "../../../../assets/img/Blocks/Block_1/Item/icon_3.svg";
import {NavLink} from "react-router-dom";
import Date from "./Date/Date";
import AvatarBlock from "../../AvatarBlock/AvatarBlock";
import Bookmark from "../../../Commons/Bookmark/Bookmark";


const Item = ({title, img, address, date, time, organizer, free, changeFavorite, id}) => {

	function clickFavorite(id) {
		changeFavorite(id);
	}

	return (
		<div className="relative">
			<NavLink to="/activity" className={cn(style.item, 'item')}>
				<div className={style.line_1}></div>
				<div className={cn(style.img_wrap, 'img_center-wrap')}>
					<img src={img} alt="img" className={cn(style.img, 'img_center')}/>
				</div>
				<div className={style.inner}>
					<p className={cn(style.text_1, "text-3 item__title")}>{title}</p>
					<div className={style.text_2_wrap}>
						<img src={icon_1} className={style.text_2__icon} alt="icon_1"/>
						<p className="text-4">{address}</p>
					</div>
					<div className={cn(style.text_2_wrap, style.text_2_wrap_date)}>
						<img src={icon_2} className={style.text_2__icon} alt="icon_2"/>
						<Date date={date}/>
					</div>
					<div className={style.text_2_wrap}>
						<img src={icon_3} className={style.text_2__icon} alt="icon_3"/>
						<p className="text-4">{time}</p>
					</div>
					<div className='flex-bottom'>
						<AvatarBlock rating={organizer.rating}
						             img={organizer.avatar}
						             text_1={organizer.title}
						             text_1_Class={'text-2'}
						             type={'organizer'}
						             size={'small'}
						             link={'/organization'}
						/>
					</div>
					<div className={style.line_2}></div>
				</div>
				{free ?
					<div className={style.block_free}>
						<p className="text-2">Бесплатно</p>
					</div>
					: null}
			</NavLink>
			<div className={style.btn_favorites} onClick={clickFavorite(id)}>
				<div className={cn("click_reaction", style.btn_favorites_inner)}>
					<Bookmark/>
				</div>
			</div>

		</div>
	)
};

export default Item;