import React from 'react';
import style from './TextRedactor.module.scss';
import {createField, Textarea} from "../FormsControls/FormsControls";
import icon_1 from "../../../assets/img/Commons/TextRedactor/icon_1.svg";
import icon_2 from "../../../assets/img/Commons/TextRedactor/icon_2.svg";
import icon_3 from "../../../assets/img/Commons/TextRedactor/icon_3.svg";
import icon_4 from "../../../assets/img/Commons/TextRedactor/icon_4.svg";
import icon_5 from "../../../assets/img/Commons/TextRedactor/icon_5.svg";
import icon_6 from "../../../assets/img/Commons/TextRedactor/icon_6.svg";
import icon_7 from "../../../assets/img/Commons/TextRedactor/icon_7.svg";
import icon_8 from "../../../assets/img/Commons/TextRedactor/icon_8.svg";
import icon_9 from "../../../assets/img/Commons/TextRedactor/icon_9.svg";
import icon_10 from "../../../assets/img/Commons/TextRedactor/icon_10.svg";
import icon_11 from "../../../assets/img/Commons/TextRedactor/icon_11.svg";
import icon_12 from "../../../assets/img/Commons/TextRedactor/icon_12.svg";
import cn from "classnames";
import {Required} from "../../../utils/Required";


const TextRedactor = ({name, required}) => {

	const requiredItem = Required(required, 'input');

	return (
		<div className={style.text_redactor}>
			<div className={style.nav}>
				<div className={cn(style.btn, 'click_reaction')}>
					<img src={icon_1} alt="icon" className={style.icon}/>
				</div>
				<div className={cn(style.btn, 'click_reaction')}>
					<img src={icon_2} alt="icon" className={style.icon}/>
				</div>
				<div className={cn(style.btn, 'click_reaction')}>
					<img src={icon_3} alt="icon" className={style.icon}/>
				</div>
				<div className={cn(style.btn, 'click_reaction')}>
					<img src={icon_4} alt="icon" className={style.icon}/>
				</div>
				<div className={cn(style.btn, 'click_reaction')}>
					<img src={icon_5} alt="icon" className={style.icon}/>
				</div>
				<div className={cn(style.btn, 'click_reaction')}>
					<img src={icon_6} alt="icon" className={style.icon}/>
				</div>
				<div className={cn(style.btn, 'click_reaction')}>
					<img src={icon_7} alt="icon" className={style.icon}/>
				</div>
				<div className={cn(style.btn, 'click_reaction')}>
					<img src={icon_8} alt="icon" className={style.icon}/>
				</div>
				<div className={cn(style.btn, 'click_reaction')}>
					<img src={icon_9} alt="icon" className={style.icon}/>
				</div>
				<div className={cn(style.btn, 'click_reaction')}>
					<img src={icon_10} alt="icon" className={style.icon}/>
				</div>
				<div className={cn(style.btn, 'click_reaction')}>
					<img src={icon_11} alt="icon" className={style.icon}/>
				</div>
				<div className={cn(style.btn, 'click_reaction')}>
					<img src={icon_12} alt="icon" className={style.icon}/>
				</div>
			</div>
			<div className={cn(style.textarea, 'textarea-wrap')}>
				{createField(
					"",
					name,
					[requiredItem],
					Textarea,
					{
						type: "text",
						className: 'textarea text_redactor__textarea text-8',
						value: ''
					})
				}
			</div>
		</div>
	)
};

export default TextRedactor;