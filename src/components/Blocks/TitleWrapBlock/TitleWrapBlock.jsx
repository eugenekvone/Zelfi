import React from 'react';
import style from './TitleWrapBlock.module.scss';
import cn from "classnames";
import icon_1 from "../../../assets/img/Blocks/Block_17/icon_1.svg";
import icon_2 from "../../../assets/img/Blocks/Block_17/icon_2.svg";

const TitleWrapBlock = ({title, success}) => {
	return (
		<div className={style.wrap}>
			<div className={style.block}>
				{success ?
					<div className={cn(style.icon_wrap, style.icon_wrap_green)}>
						<img src={icon_1} alt="icon_1"/>
					</div>
					:
					<div className={cn(style.icon_wrap, style.icon_wrap_pink)}>
						<img src={icon_2} alt="icon_2"/>
					</div>
				}
				<p className="text-16 text-1_adaptive">{title}</p>
			</div>
		</div>
	)
};

export default TitleWrapBlock;