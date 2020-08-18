import React from 'react';
import ModalItem from "react-modal";
import img from "../../../../assets/img/initialState/CreateEvent/img.jpg";


const Modal = ({isOpen, close}) => {
	return (
		<ModalItem
			isOpen={isOpen}
			contentLabel="onRequestClose Example"
			className='modal-2 modal'
			overlayClassName="overlay">
			<img src={img} alt="img" className="modal-2__img"/>
			<div className="form__series-wrap">
				<div className="form__series form__series-2 form__series-1_adaptive">
					<div className="btn btn-2 btn_height-1" onClick={close}>
						<p className="text-7">Отмена</p>
					</div>
					<div className="btn btn-1 btn_height-1 order_-1_adaptive">
						<p className="text-7 text_white">Готово</p>
					</div>
				</div>
			</div>
		</ModalItem>
	)
};

export default Modal;