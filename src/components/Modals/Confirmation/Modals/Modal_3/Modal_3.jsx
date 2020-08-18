import React from 'react';
import cn from "classnames";
import Modal from "react-modal";
import style from './Modal_3.module.scss';
import icon from "../../../../../assets/img/Elements/solid_sign.svg";
import {NavLink} from "react-router-dom";


const Modal_3 = ({isOpen, close}) => {
	return (
		<Modal
			isOpen={isOpen}
			contentLabel="onRequestClose Example"
			className={cn(style.modal, 'modal-1 modal')}
			overlayClassName="overlay">
			<div className={style.block}>
				<div className={style.item}>
					<img src={icon} alt="icon"/>
				</div>
				<p className="text-8"><span>Внимание!</span>
					У вас нет созданных организаций, чтобы присвоить мероприятие необходимо создать организацию.</p>
			</div>
			<NavLink to='/create_organization' className='btn btn-1 btn_height-1' onClick={close}>
				<p className="text-7 text_white">Создать организацию</p>
			</NavLink>
		</Modal>
	)
};

export default Modal_3;