import React from 'react';
import style from './ContactBlock.module.scss';
import cn from "classnames";
import img_2 from "../../../assets/img/initialState/Block_18/img_2.jpg";
import Info from "../../Commons/Info/Info";
import MajorityBlock from "../MajorityBlock/MajorityBlock";
import AvatarBlock from "../AvatarBlock/AvatarBlock";
import {NumbFormat} from "../../../utils/NumbFormat";

const ContactBlock = ({free, minimal, title, address, email, phone, organizer, imgMain, dates, limitation}) => {

	let itemTitle = 'Название';
	let itemOrganizer = 'Coca-cola';

	if (organizer) itemOrganizer = organizer.label

	if (title) {
		itemTitle = title
	}

	return (
		<div className={style.block}>
			<div className={style.inner}>
				<p className={cn(style.text_1, "h2-2")}>{itemTitle}</p>
				<div className={style.block_1}>
					<div className={style.item_1}>
						<Info text={address} textClass={'text-8'} opacity item={'address'}/>
					</div>
					<div className={style.item_1}>
						<Info text={'21 окт. 2019 (пт)'} textClass={'text-8'} opacity item={'date'} dates={dates}
						      margin_right/>
					</div>
					<div className={style.item_1}>
						<Info text={'17:30'} textClass={'text-8'} opacity item={'time'}/>
					</div>
				</div>
				{!minimal &&
				<div>
					<p className={cn(style.text_2, 'text-7')}>Контакты</p>
					<div className={style.block_2}>
						<div className={style.item_2}>
							<Info text={'+7' + phone} opacity item={'phone'}/>
						</div>
						<div className={style.item_2}>
							<Info text={email} opacity item={'mail'}/>
						</div>
					</div>
				</div>
				}
				<div className={style.block_3}>
					{free ?
						<p className={cn('text-3 text_pink', style.text_5)}>Бесплатное</p>
						:
						<div>
							<p className={cn("text-34", style.text_3)}>Стоимость: <span>от <mark>{NumbFormat(1490)}</mark> ₽</span>
							</p>
							<p className={cn("text-13 text_pink", style.text_4)}>+ 150 z</p>
						</div>
					}
				</div>
				{!minimal &&
				<AvatarBlock rating={4}
				             img={img_2}
				             text_1={itemOrganizer}
				             text_1_Class={'text-2'}
				             type={'organizer'}
				             size={'small'}
				             link={'/organization'}/>
				}
				{limitation &&
				<div className={style.block_4}>
					<MajorityBlock/>
				</div>
				}
			</div>
			<div className={cn(style.img_wrap, 'img_center-wrap order_-1_adaptive')}>
				{imgMain.length && <img src={imgMain} alt="img" className="img_center-height"/>}
			</div>
		</div>
	)
};

export default ContactBlock;