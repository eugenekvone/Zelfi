import React from 'react';
import cn from "classnames";
import Modal from "react-modal";
import style from './Modal_2.module.scss';
import icon from "../../../../../../assets/img/Elements/modal__close_icon.svg";
import img from "../../../../../../assets/img/Elements/QR.svg";


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
			<img src={img} alt="img" className={style.item}/>
		</Modal>
	)
};

export default Modal_2;