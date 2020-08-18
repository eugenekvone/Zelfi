import React from 'react';
import cn from "classnames";
import Modal from "react-modal";
import style from './Modal_2.module.scss';
import icon from "../../../../assets/img/Elements/modal__close_icon.svg";


const Modal_2 = ({isOpen, close}) => {
	return (
		<Modal
			isOpen={isOpen}
			contentLabel="onRequestClose Example"
			className={cn(style.modal, 'modal-1 modal')}
			overlayClassName="overlay">
			<div className='modal__close click_reaction' onClick={close}>
				<img src={icon} alt="icon"/>
			</div>
			<p className={cn("text-8 text_center", style.text)}>Деньги успешно отправлены!</p>
			<p className="text-17 text_center text-1_adaptive">Спасибо!</p>
		</Modal>
	)
};

export default Modal_2;