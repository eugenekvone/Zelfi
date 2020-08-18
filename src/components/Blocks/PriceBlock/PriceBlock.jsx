import React, {useState} from 'react';
import style from './PriceBlock.module.scss';
import cn from "classnames";
import icon from "../../../assets/img/Blocks/Block_12/icon.svg";
import CloseBlock from "../CloseBlock/CloseBlock";
import {NumbFormat} from "../../../utils/NumbFormat";

const PriceBlock = ({disabled, typeSecond}) => {

	let [openMode, setOpenMode] = useState(false);

	let toggleOpenMode = () => {
		openMode ? setOpenMode(false) : setOpenMode(true)
	}

	let disableEditMode = () => {
		setOpenMode(false)
	}

	let initialState = {
		items: [1250, 1800, 2500, 3500, 4700, 5700, 6700, 7700, 8700, 9700, 9900, 10800, 11700, 12700, 14700, 18700]
	};

	let component = () => (
		<div className={style.block_1}>
			{initialState.items.map(i => <p className="text-7">{NumbFormat(i)} ₽</p>)}
		</div>
	);

	return (
		<div className={cn(style.block, typeSecond && style.typeSecond)}>
			{typeSecond &&
			<div className='flex-ver-center'>
				<p className={cn("text-11 active_adaptive", style.text_1)}>Стоимость:</p>
				<p className={cn("text-20 text-5_adaptive active_adaptive", style.text_2)}>от</p>
			</div>
			}
			<p className={cn("text-20 text-5_adaptive", style.item)}>{NumbFormat(1250)}<span> ₽</span></p>
			<p className={cn("text-20 text-5_adaptive", style.item)}>{NumbFormat(1800)}<span> ₽</span></p>
			<p className={cn("text-20 text-5_adaptive", style.item)}>{NumbFormat(2500)}<span> ₽</span></p>
			<p className={cn("text-20 text-5_adaptive", style.item)}>{NumbFormat(3500)}<span> ₽</span></p>
			<p className={cn("text-20 text-5_adaptive", style.item)}>{NumbFormat(4700)}<span> ₽</span></p>
			<div className={cn(style.btn, 'click_reaction', disabled && 'click_disabled')} onClick={toggleOpenMode}>
				<img src={icon} alt="icon"/>
			</div>
			{openMode && <CloseBlock component={component} close={disableEditMode}/>}
		</div>
	)
};

export default PriceBlock;