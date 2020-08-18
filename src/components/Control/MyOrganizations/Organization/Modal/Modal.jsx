import React from 'react';
import cn from "classnames";
import ModalItem from "react-modal";
import ModalReduxForm from "./ModalForm/ModalForm";
import style from "./Modal.module.scss";


const Modal = ({isOpen, close}) => {
	return (
		<ModalItem
			isOpen={isOpen}
			contentLabel="onRequestClose Example"
			className='modal-1 modal'
			overlayClassName="overlay">
			<p className={cn(style.text, "text-3 text-5_adaptive")}>Передать права доступа</p>
			<p className={cn(style.text, "text-1")}>
				Напишите <span>E-mail</span> пользователя которому вы хотите передать доступ. Ему будет выслано письмо.
				Доступ имеют право получить только <span>зарегистрированные пользователи.</span></p>
			<ModalReduxForm/>
			<div className="form__series form__series-3 form__series-1_adaptive">
				<div className="btn-2 btn btn_height-1" onClick={close}>
					<p className="text-7">Отменить</p>
				</div>
				<div className="btn-1 btn btn_height-1 order_-1_adaptive">
					<p className="text-7 text_white">Отправить</p>
				</div>
			</div>
		</ModalItem>
	)
};

export default Modal;