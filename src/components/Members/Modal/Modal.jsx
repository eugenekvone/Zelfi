import React from 'react';
import cn from "classnames";
import ModalItem from "react-modal";
import close_icon from "../../../assets/img/Elements/modal__close_icon.svg";
import style from './Modal.module.scss';
import block_img from "../../../assets/img/initialState/Members/modal__block_img.svg";
import icon_3 from "../../../assets/img/Members/icon_3.svg";


const Modal = ({isOpen, close}) => {
	return (
		<ModalItem
			isOpen={isOpen}
			contentLabel="onRequestClose Example"
			className={cn('modal-1 modal', style.modal)}
			overlayClassName="overlay">
			<div className="modal__close click_reaction" onClick={close}>
				<img src={close_icon} alt="close_icon"/>
			</div>
			<p className={cn(style.text_1, "text-28")}>Билет успешно принят!</p>
			<div className={style.block}>
				<img src={block_img} alt="block_img" className={style.block_img}/>
				<img src={icon_3} alt="icon_3" className={style.block_icon}/>
			</div>
			<p className={cn(style.text_2, 'text-3')}>12345</p>
			<div className={cn(style.btn, "btn btn-1 btn_height-1")} onClick={close}>
				<p className="text-7 text_white">Завершить</p>
			</div>
		</ModalItem>
	)
};

export default Modal;