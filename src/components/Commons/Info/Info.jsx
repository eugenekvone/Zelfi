import React from 'react';
import style from './Info.module.scss';
import cn from "classnames";
import date_icon from "../../../assets/img/Elements/date_icon.svg";
import time_icon from "../../../assets/img/Elements/time_icon.svg";
import address_icon from "../../../assets/img/Elements/address_icon_purple.svg";
import phone_icon from "../../../assets/img/Elements/phone_icon.svg";
import mail_icon from "../../../assets/img/Elements/mail_icon.svg";
import Date from "../../Blocks/GridBlock/Item/Date/Date";


const Info = ({text, item, margin_right, opacity, textClass, dates}) => {

	var item_class = 'text-11';
	var icon = null;
	var item_opacity = null;

	if (opacity) item_opacity = style.opacity;
	if (textClass) item_class = textClass;

	let dateComponent = () => null;
	let datesValue = {text};

	if (dates) datesValue = dates;

	switch (item) {
		case 'date':
			icon = date_icon;
			dateComponent = () => (<Date date={datesValue} textClass={item_class} opacity={item_opacity} btnClass=''/>);
			break;
		case 'time':
			icon = time_icon;
			break;
		case 'date_text':
			icon = date_icon;
			break;
		case 'address':
			icon = address_icon;
			break;
		case 'phone':
			icon = phone_icon;
			break;
		case 'mail':
			icon = mail_icon;
			break;
		default:
			break;
	}

	var inner = (
		<div className={style.info}>
			<div className={style.icon_wrap}>
				<img src={icon} alt="icon" className={style.icon}/>
			</div>
			{dateComponent() ?
				dateComponent()
				:
				<p className={cn(item_class, margin_right && style.margin_right, item_opacity)}>{text}</p>
			}
		</div>
	)

	var component = inner;

	switch (item) {
		case 'phone':
			component = (
				<a href={"tel:" + text} className='link'>
					{inner}
				</a>
			);
			break;
		case 'mail':
			component = (
				<a href={"mailto:" + text} className='link'>
					{inner}
				</a>
			);
			break;
		default:
			break;
	}

	return component
};

export default Info;