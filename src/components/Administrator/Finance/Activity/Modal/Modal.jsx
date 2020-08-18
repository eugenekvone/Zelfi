import React from 'react';
import ModalItem from "react-modal";
import ModalReduxForm from "./ModalForm/ModalForm";


const Modal = ({isOpen, close}) => {

	return (
		<ModalItem
			isOpen={isOpen}
			contentLabel="onRequestClose Example"
			className='modal-1 modal'
			overlayClassName="overlay">
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