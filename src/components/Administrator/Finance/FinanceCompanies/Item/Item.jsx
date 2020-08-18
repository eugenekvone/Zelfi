import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import AvatarBlock from "../../../../Blocks/AvatarBlock/AvatarBlock";
import icon_1 from "../../../../../assets/img/Elements/check.svg";
import icon_2 from "../../../../../assets/img/Elements/stop.svg";
import Info from "../../../../Commons/Info/Info";

const Item = ({title, img, contract}) => {
	return (
		<div className={cn(style.item, 'item_1')}>
			<AvatarBlock img={img} type={'info'}
			             text_1={title}
			             imgWrapClass_name={style.block_4}
			             info_none_adaptive
			             text_1_Class='none_adaptive'
			             link={'/organization'}/>
			<div className={style.block_5}>
				<p className="text-7">ООО «Праздник»</p>
				<Info item='phone' text='+7 (999) 888-77-66' opacity/>
				<Info item='mail' text='example@mail.com' opacity/>
			</div>
			<div className={style.block_1}>
				<div>
					<p className={cn("text-11", style.text_1)}>Общая сумма средств:</p>
					<p className="text-16">254 321 ₽</p>
				</div>
				<div>
					<p className={cn("text-11", style.text_1)}>Выведено средств:</p>
					<p className="text-16">57 054 ₽</p>
				</div>
				<div>
					<p className={cn("text-11", style.text_1)}>Комиссия Zelfi:</p>
					<p className="text-16">67 043 ₽</p>
				</div>
				<div>
					<p className={cn("text-11", style.text_1)}>Прибыль с учетом комиссии:</p>
					<p className="text-16">187 278 ₽</p>
				</div>
				<div>
					<p className={cn("text-11", style.text_1)}>Доступно к выводу:</p>
					<p className="text-16">254 321 ₽</p>
				</div>
				{contract ?
					<div className={cn(style.block_2, style.block_2_purple)}>
						<p className="text-11 flex-left flex-right">Договор заключен</p>
						<div className={cn("flex-right icon_wrap icon_wrap_purple", style.block_3)}>
							<img src={icon_1} alt="icon_1"/>
						</div>
					</div>
					:
					<div className={cn(style.block_2, style.block_2_pink)}>
						<p className="text-11 flex-left flex-right">Договор не заключен</p>
						<div className={cn("flex-right icon_wrap icon_wrap_pink", style.block_3)}>
							<img src={icon_2} alt="icon_2"/>
						</div>
					</div>
				}
			</div>
		</div>
	)
};

export default Item;