import React, {useState} from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import BookmarkBlock from "../../../Blocks/BookmarkBlock/BookmarkBlock";
import icon_1 from "../../../../assets/img/Profile/MyTickets/Item/icon_1.svg";
import icon_5 from "../../../../assets/img/Profile/MyTickets/Item/icon_5.svg";
import icon_6 from "../../../../assets/img/Profile/MyTickets/Item/icon_6.svg";
import ModalWrapBlock from "../../../Blocks/ModalWrapBlock/ModalWrapBlock";
import Modal_1 from "./Modals/Modal_1/Modal_1";
import Modal_2 from "./Modals/Modal_2/Modal_2";
import {NumbFormat} from "../../../../utils/NumbFormat";

const Item = ({archive, title, visited}) => {

	let [modal_1, setModal_1] = useState(false);
	let [modal_2, setModal_2] = useState(false);

	let [open, setOpen] = useState(false);

	let openModal_1 = () => {
		setModal_1(true)
	};
	let openModal_2 = () => {
		setModal_2(true)
	};

	let closeModal_1 = () => {
		setModal_1(false)
	};
	let closeModal_2 = () => {
		setModal_2(false)
	};

	let toggleOpen = () => {
		if (open) {
			setOpen(false)
		} else {
			setOpen(true)
		}
	};

	let block_class = null;
	if (archive) block_class = style.block_archive;

	let component_1 = () => (
		<div className={style.component_1}>
			<div className={cn(style.block_1, 'click_reaction')} onClick={openModal_2}>
				<img src={icon_1} alt="icon_1"/>
			</div>
			<div className={style.block_2}>
				<div>
					<p className={cn(style.text_1, "text-16")}>Входной билет</p>
					<p className={cn(style.text_2, "text-11")}>ул. Волкова, д. 7/29
						<span><br></br>вход со стороны Тихомирова</span>
					</p>
					<p className={cn(style.text_2, "text-11")}>Дата и время:</p>
					<p className="text-16">21.10.2019 <span>(пт),</span> 14:00</p>
				</div>
				<div className="flex-column">
					<p className={cn(style.text_2, "text-16 flex-bottom")}><span>Куплен: </span>21.10.2019
					</p>
					<p className={cn(style.text_2, "text-16")}><span>Цена: </span>{NumbFormat(1800)} ₽</p>
					<p className="text-16 text_pink">+10 z</p>
				</div>
			</div>
		</div>
	);

	let component_2 = () => (
		<div className={style.component_2}>
			<div className="btn btn-4 btn_height-1" onClick={openModal_1}>
				<p className="text-3 text_white text_center text-1_adaptive">Запрос на отмену <br></br>регистрации</p>
			</div>
			<div className="btn btn-5 btn_height-1">
				<img src={icon_5} alt="icon_5" className='btn__icon_left'/>
				<p className="text-3 text-1_adaptive">Распечатать</p>
			</div>
			<div className={cn(style.btn, "btn btn-5 btn_height-1")}>
				<img src={icon_6} alt="icon_6" className='btn__icon_left'/>
				<p className="text-3 text-1_adaptive">Скачать PDF</p>
			</div>
		</div>
	);

	return (
		<div className={cn(style.block, block_class, 'item_1')}>
			<Modal_1 isOpen={modal_1} close={closeModal_1}/>
			<Modal_2 isOpen={modal_2} close={closeModal_2}/>
			<div className={style.item_4}>
				<BookmarkBlock title={title}/>
			</div>
			<div className={cn(style.block_3, open && style.active, 'active_adaptive click_reaction')}
			     onClick={toggleOpen}>
				<div className={style.block_3__inner}>
					<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M13.3999 1.00073L6.8358 7.40073L0.599902 1.00073" stroke="#9B63F8" stroke-width="1.5"/>
					</svg>
				</div>
			</div>
			<div className={cn(style.block_4, open && style.active)}>
				<ModalWrapBlock component_1={component_1} component_2={component_2} typeSecond/>
			</div>
			{archive && visited &&
			<div className={cn(style.item_1, style.item_1_purple)}>
				<p className="text-16 text_purple text_center">Мероприятие <br></br>посещено</p>
			</div>
			}
			{archive && !visited &&
			<div className={cn(style.item_1, style.item_1_pink)}>
				<p className="text-16 text_pink text_center">Мероприятие <br></br>не посещалось</p>
			</div>
			}

		</div>
	)
}

export default Item;