import React, {useState} from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import icon from "../../../../assets/img/Blocks/Block_20/icon.svg";
import icon_active from "../../../../assets/img/Blocks/Block_20/icon_active.svg";

const Item = ({title}) => {

	let [openMode, setOpenMode] = useState(false);

	let itemToggle = () => {
		openMode ? setOpenMode(false) : setOpenMode(true)
	};

	return (
		<div className={cn(style.item, openMode && style.item_active)}>
			<div className={style.nav} onClick={itemToggle}>
				<p className={cn(style.nav__text, "text-7 text_white")}>{title}</p>
				<img src={icon} alt="icon" className={cn(style.icon, style.icon_disabled)}/>
				<img src={icon_active} alt="icon_active" className={cn(style.icon, style.icon_active)}/>
			</div>
			<div className={style.content}>
				<p className={cn("text-14 text-3_adaptive", style.text)}>
					В лаборатории жгучих перцев соберём собственные аппараты для экстракции. Узнаем, чем на самом деле
					пахнет мята, почему красный перец такой жгучий и получим привычные для кухни запахи лабораторным
					способом.
					<br></br><br></br>
					В лаборатории вареных яиц c помощью физико-химических методов вычислим идеальное время для варки
					куриного яйца. Отделим желток от белка, проведем качественное сравнение составов и узнаем все о
					стоимости выеденного яйца.
					<br></br><br></br>
					В лаборатории консервированных ананасов познакомимся с тушенкой и разберемся в методах сохранения
					продуктов. Законсервируем парочку ананасов четырьмя разными способами и заберем все это домой, чтобы
					выяснить, какой метод консервации лучше.
				</p>
			</div>
		</div>
	)
}

export default Item;