import React, {useState} from 'react';
import style from './BookmarkBlock.module.scss';
import cn from "classnames";
import icon_1 from "../../../assets/img/Elements/date_icon.svg";
import icon_2 from "../../../assets/img/Elements/time_icon.svg";
import icon_3 from "../../../assets/img/Blocks/Block_10/icon_1.svg";
import img from "../../../assets/img/initialState/Block_10/img.jpg";
import Info from "../../Commons/Info/Info";
import {NavLink} from "react-router-dom";
import CloseBlock from "../CloseBlock/CloseBlock";


const BookmarkBlock = ({title, link, bookmark}) => {

	let [openMode, setOpenMode] = useState(false);

	let toggleOpenMode = () => {
		openMode ? setOpenMode(false) : setOpenMode(true)
	}

	let disableEditMode = () => {
		setOpenMode(false)
	}

	let linkValue = '/activity';

	if (link) linkValue = link;

	let initialState = {
		items: [
			{date: '21 окт. 2019 (пт)', time: '17:30'},
			{date: '21 окт. 2019 (пт)', time: '17:30'},
			{date: '21 окт. 2019 (пт)', time: '17:30'},
			{date: '21 окт. 2019 (пт)', time: '17:30'},
			{date: '21 окт. 2019 (пт)', time: '17:30'},
			{date: '21 окт. 2019 (пт)', time: '17:30'},
			{date: '21 окт. 2019 (пт)', time: '17:30'},
		]
	};

	let component = () => (
		<div className={style.block_1}>
			{initialState.items.map(i =>
				<div className={style.item_2}>
					<img src={icon_1} alt="icon_1" className={style.icon_3}/>
					<p className={cn("text-11", style.text_5)}>{i.date}</p>
					<img src={icon_2} alt="icon_2" className={style.icon_3}/>
					<p className="text-11">{i.time}</p>
				</div>
			)}
		</div>
	)

	return (
		<div className={style.block}>
			<NavLink to={linkValue}
			         className={cn(style.img_wrap, bookmark && style.img_wrap_bookmark, 'img_center-wrap link')}>
				<img src={img} alt="img" className="img_center-width"/>
			</NavLink>
			<div className='flex-column'>
				<p className={cn(style.text_1, "text-16")}>Спорт</p>
				<NavLink to={linkValue} className={cn(style.text_2, "text-3 link")}>{title}</NavLink>
				<div className={style.item_1}>
					<Info item='address' text={'Казань, ул. Волкова, д. 7/29'}/>
				</div>
				<div className={style.item_1}>
					<Info item='date_text' text={'21 окт. 2019 (пт)'} margin_right/>
					<Info item='time' text={'17:30'}/>
				</div>
				<div className='flex-column' onClick={toggleOpenMode}>
					{!openMode ?
						<p className={cn(style.text_3, "text-10 click_reaction")}>Показать все</p>
						:
						<p className={cn(style.text_4, "text-10 click_reaction text_pink")}>
							Показать все<img src={icon_3} alt="icon_3" className={style.icon_2}/></p>
					}
				</div>
				<p className="text-20 flex-column_adaptive">
					Организатор:
					<NavLink to='/organization'>
						<span className={cn('link', style.item_3)}> Coca-Cola</span>
					</NavLink>
				</p>
			</div>
			{openMode && <CloseBlock component={component} close={disableEditMode}/>}
		</div>
	)
}

export default BookmarkBlock;