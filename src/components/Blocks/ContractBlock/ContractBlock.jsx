import React from 'react';
import style from './ContractBlock.module.scss';
import cn from "classnames";
import {NavLink} from "react-router-dom";
import AvatarBlock from "../AvatarBlock/AvatarBlock";
import img from "../../../assets/img/initialState/Block_22/img.jpg";
import icon_1 from "../../../assets/img/Blocks/Block_22/icon_1.svg";
import icon_2 from "../../../assets/img/Blocks/Block_22/icon_2.svg";
import icon_3 from "../../../assets/img/Blocks/Block_22/icon_3.svg";
import Rating from "../../Commons/Rating/Rating";
import Info from "../../Commons/Info/Info";

const ContractBlock = ({title, contract, url_1, url_2, items_1, items_2, type, modal}) => {

	var inner_1_Class = style.inner_1_type_1;
	var inner_2_Class = style.inner_2_type_1;

	switch (type) {
		case 1:
			inner_1_Class = style.inner_1_type_1;
			inner_2_Class = style.inner_2_type_1;
			break;
		case 2:
			inner_1_Class = style.inner_1_type_2;
			inner_2_Class = style.inner_2_type_2;
			break;
		default:
			break;
	}

	const component_1 = () => contract ?
		<div className={style.block_3}>
			<p className={cn(style.text_4, "text-11")}>Договор заключен</p>
			<div className={style.item_2}>
				<img src={icon_2} alt="icon_2"/>
			</div>
		</div>
		:
		<div className={style.block_5}>
			<div className={style.block_4}>
				<p className={cn(style.text_5, "text-11")}>Договор не заключен</p>
				<div className={style.item_3}>
					<img src={icon_3} alt="icon_3"/>
				</div>
			</div>
			<p className={cn("text-6 text_center", style.item_5)}>Для вывода средств необходимо заключить договор!</p>
		</div>

	const component_2 = () => !contract ?
		<NavLink to={url_2 ? url_2 : url_1} className={cn(style.btn_1, "btn btn-2 btn_height-1")}>
			<p className="text-7">Заключить договор</p>
		</NavLink>
		:
		type == 2 &&
		<div className={cn(style.btn_2, "btn btn-1 btn_height-1")} onClick={modal}>
			<p className="text-7 text_white">Запросить выплату</p>
		</div>


	return (
		<div className={cn(style.item, 'item_1')}>
			<div className={cn(style.inner_1, style.inner, inner_1_Class)}>
				<AvatarBlock img={img}
				             size={'low'}
				             text_1={title}
				             text_2={'+7 (999) 888-77-66'}
				             text_3={'example@mail.com'}
				             itemClassNew={style.item_6}
				             info_none_adaptive
				             type={'info'}
				             text_1_Class={'text-3 text-1_adaptive'}
				             link={'/organization'}/>
				<div className="active_adaptive">
					<Info item='phone' text='+7 (999) 888-77-66' opacity/>
				</div>
				<div className="active_adaptive">
					<Info item='mail' text='example@mail.com' opacity/>
				</div>
				{type == 2 &&
				items_1.map(i =>
					<div className={style.item_4}>
						<p className={cn(style.text_1, "text-11")}>{i.title}</p>
						<p className={i.pink ? "text-23 text_pink" : "text-23"}>{i.text}</p>
					</div>
				)
				}
				{type == 1 &&
				<div>
					<div className={style.block_1}>
						<img src={icon_1} alt="icon_1" className={style.item_1}/>
						<div>
							<p className={cn(style.text_2, "text-7")}>2657</p>
							<p className="text-1">подписчиков</p>
						</div>
					</div>
					<Rating rating={4} size={'middle'} purple/>
				</div>
				}
				{type == 1 &&
				<div className={cn(style.block_2, "btn btn-2 btn_height-1")}>
					<p className={cn("text-19 text_pink", style.text_3)}>23/50</p>
					<p className="text-1">актуальных<br></br>мероприятий</p>
				</div>
				}
				<div className={cn(type == 2 && contract && 'flex-top', 'none_adaptive')}>
					{component_1()}
				</div>
			</div>
			<div className={cn(style.inner_2, style.inner, inner_2_Class)}>
				{items_2.map(i =>
					<div>
						<p className={cn(style.text_1, "text-11")}>{i.title}</p>
						<p className={i.pink ? "text-23 text_pink" : "text-23"}>{i.text} <span>₽</span></p>
					</div>
				)}
				<div className='none_adaptive'>
					{component_2()}
				</div>
			</div>
			<div className={cn(style.inner_3, 'active_adaptive')}>
				{component_1()}
				{component_2()}
			</div>
		</div>
	)
};

export default ContractBlock;