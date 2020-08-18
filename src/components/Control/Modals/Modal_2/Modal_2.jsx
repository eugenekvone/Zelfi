import React from 'react';
import cn from "classnames";
import ModalItem from "react-modal";
import style from './Modal_2.module.scss';
import icon from "../../../../assets/img/Elements/modal__close_icon.svg";


const Modal_2 = ({isOpen, close}) => {
	return (
		<ModalItem
			isOpen={isOpen}
			contentLabel="onRequestClose Example"
			className={cn(style.modal, 'modal-1 modal')}
			overlayClassName="overlay">
			<div className='modal__close click_reaction' onClick={close}>
				<img src={icon} alt="icon"/>
			</div>
			<div className={style.block_1}>
				<p className="text-8 text_center">Ваш запрос отправлен!<br></br>
					Средства будут выведены на ваш банковский счет в течении 3-5 рабочих дней!</p>
			</div>
		</ModalItem>
	)
};

export default Modal_2;