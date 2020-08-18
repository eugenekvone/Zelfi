import React, {useState} from 'react';
import cn from "classnames";
import ModalItem from "react-modal";
import LoginContentContainer from "../../Login/LoginContent/LoginContentContainer";
import MainContainer from "../../Registration/Main/MainContainer";
import style from './Modal.module.scss';


const Modal = ({isOpen, close}) => {

	let [nav, setNav] = useState(true);

	let trueNav = () => setNav(true);
	let falseNav = () => setNav(false);

	return (
		<ModalItem
			isOpen={isOpen}
			contentLabel="onRequestClose Example"
			className='modal'
			ariaHideApp={false}
			overlayClassName="overlay">
			<div className={cn("case", style.content)}>
				<div className={style.navbar}>
					<p className={cn("text-12 click_reaction text_purple text-2_adaptive",
						style.item, nav && style.item_active
					)}
					   onClick={trueNav}
					>Вход</p>
					<p className={cn(
						"text-12 click_reaction text_purple text-2_adaptive",
						style.item, !nav && style.item_active
					)}
					   onClick={falseNav}
					>Регистрация</p>
				</div>
				{nav ?
					<LoginContentContainer close={close}/>
					:
					<MainContainer close={close} linkNext={'/registration/send'}/>
				}
			</div>
		</ModalItem>
	)
};

export default Modal;