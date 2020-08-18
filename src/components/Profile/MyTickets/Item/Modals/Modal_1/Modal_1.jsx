import React from 'react';
import Modal from "react-modal";
import Modal_1_ReduxForm from "./Modal_1_Form/Modal_1_Form";


const Modal_1 = ({isOpen, close}) => {
	return (
		<Modal
			isOpen={isOpen}
			contentLabel="onRequestClose Example"
			className='modal-1 modal'
			overlayClassName="overlay">
			<Modal_1_ReduxForm/>
			<div className="form__series form__series-3 form__series-1_adaptive">
				<div className="btn btn-2 btn_height-1" onClick={close}>
					<p className="text-7">Отменить</p>
				</div>
				<div className="btn btn-1 btn_height-1 order_-1_adaptive">
					<p className="text-7 text_white">Отправить</p>
				</div>
			</div>
		</Modal>
	)
};

export default Modal_1;