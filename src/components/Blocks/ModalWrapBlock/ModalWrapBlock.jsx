import React, {useState} from 'react';
import style from './ModalWrapBlock.module.scss';
import cn from "classnames";
import icon_2 from "../../../assets/img/Profile/MyTickets/Item/icon_2.svg";
import icon_3 from "../../../assets/img/Profile/MyTickets/Item/icon_3.svg";
import icon_4 from "../../../assets/img/Profile/MyTickets/Item/icon_4.svg";
import icon_1 from "../../../assets/img/Profile/MyTickets/Item/icon_8.svg";
import icon_5 from "../../../assets/img/Profile/MyTickets/Item/icon_9.svg";


const ModalWrapBlock = ({component_1, component_2, img, typeSecond}) => {

	let [openMode, setOpenMode] = useState(false);

	let activateOpenMode = () => {
		setOpenMode(true)
	};
	let deactivateOpenMode = () => {
		setOpenMode(false)
	};

	let component_1_Item = component_1;
	let component_2_Item = component_2;

	return (
		<div className={cn(style.block, typeSecond && style.typeSecond, openMode && style.active, 'relative')}>
			<div className={style.inner_1}>
				{!img && <img src={icon_2} alt="icon_2" className={cn(style.item_1, 'none_adaptive')}/>}
				{!img && <img src={icon_1} alt="icon_1" className={cn(style.item_2, 'active_adaptive')}/>}
				{component_1_Item && component_1_Item()}
				<div onClick={activateOpenMode}
				     className={cn(style.btn, style.btn_disabled, 'click_reaction')}>
					<img src={icon_3} alt="icon_3"/>
				</div>
			</div>
			<div className={style.inner_2}>
				<div className={style.item_3}>
					<img src={icon_2} alt="icon_2" className={cn(style.item_1, 'none_adaptive')}/>
					<img src={icon_1} alt="icon_1" className={cn(style.item_2, 'active_adaptive')}/>
					{component_2_Item && component_2_Item()}
					<div onClick={deactivateOpenMode} className={cn(style.btn, style.btn_active, 'click_reaction')}>
						<img src={icon_4} alt="icon_4" className={style.item_4}/>
						<img src={icon_5} alt="icon_5" className={style.item_5}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalWrapBlock;