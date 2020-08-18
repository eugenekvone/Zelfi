import React from 'react';
import style from './NavBlock.module.scss';
import Btn_nav from "../../Commons/Btns/BtnNav/BtnNav";
import cn from "classnames";


const NavBlock = ({component, nav, url, hocCase, children, typeSecond}) => {

	var itemCase = null;

	if (hocCase) itemCase = 'case';

	return (
		<div className={cn(itemCase, style.item)}>
			<div className={cn(style.nav, typeSecond && style.typeSecond)}>
				{nav && nav.map(i =>
					<Btn_nav title={i.title}
					         quantity={i.quantity}
					         url={url}
					         itemUrl={i.url}
					         typeSecond={typeSecond}
					         number={i.number}/>
				)}
			</div>
			{component && component()}
			{children}
		</div>
	)
};

export default NavBlock