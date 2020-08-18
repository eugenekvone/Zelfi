import React from 'react';
import style from './CloseBlock.module.scss';
import cn from "classnames";
import img from "../../../assets/img/initialState/Block_10/img.jpg";
import icon_1 from "../../../assets/img/Elements/dots.svg";
import icon_2 from "../../../assets/img/Blocks/Block_6/icon_1.svg";


const CloseBlock = ({component, close}) => {
	return (
		<div className={style.block}>
			<div className={style.inner}>
				<img src={icon_1} alt="icon_1" className={style.icon}/>
				{component()}
				<div className={cn(style.btn, 'click_reaction')} onClick={close}>
					<img src={icon_2} alt="icon_2"/>
				</div>
			</div>
		</div>
	)
};

export default CloseBlock;