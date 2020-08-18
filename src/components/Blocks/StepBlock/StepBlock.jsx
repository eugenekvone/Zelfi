import React from 'react';
import style from './StepBlock.module.scss';
import cn from "classnames";
import icon_1 from "../../../assets/img/Blocks/Block_13/icon_1.svg";
import icon_2 from "../../../assets/img/Blocks/Block_13/icon_2.svg";
import icon_1_active from "../../../assets/img/Blocks/Block_13/icon_1_active.svg";
import icon_2_active from "../../../assets/img/Blocks/Block_13/icon_2_active.svg";


const StepBlock = ({step}) => {
	return (
		<div className={cn(style.block, 'block_13__step_' + step)}>
			<div className={cn(style.item, style.item_1, 'block_13__item')}>
				<p className={cn(style.item_1__text, style.text, 'text-5_adaptive text-24 block_13__text')}>1</p>
			</div>
			<div className={cn(style.line, 'block_13__line')}></div>
			<div className={cn(style.item, style.item_1, 'block_13__item')}>
				<p className={cn(style.item_1__text, style.text, 'text-5_adaptive text-24 block_13__text')}>2</p>
			</div>
			<div className={cn(style.line, 'block_13__line')}></div>
			<div className={cn(style.item, style.item_1, 'block_13__item')}>
				<img src={icon_2} alt="icon_2"
				     className={cn(style.icon_1, 'block_13__item_icon block_13__item_icon_disabled')}/>
				<img src={icon_2_active} alt="icon_2"
				     className={cn(style.icon_1, 'block_13__item_icon block_13__item_icon_active')}/>
			</div>
			<div className={cn(style.line, 'block_13__line')}></div>
			<div className={cn(style.item, style.item_1, 'block_13__item')}>
				<p className={cn(style.item_1__text, style.text, 'text-5_adaptive text-24 block_13__text')}>3</p>
			</div>
			<div className={cn(style.line, 'block_13__line')}></div>
			<div className={cn(style.item, style.item_2, 'block_13__item')}>
				<p className={cn(style.item_2__text, style.text, 'text-8_adaptive text-1 block_13__text')}>Завершение</p>
				<img src={icon_1} alt="icon_2" className={cn(style.icon_2,
					'block_13__item_icon block_13__item_icon_disabled btn__icon_right')}/>
				<img src={icon_1_active} alt="icon_2" className={cn(style.icon_2,
					'block_13__item_icon block_13__item_icon_active btn__icon_right')}/>
			</div>
		</div>
	)
};

export default StepBlock;