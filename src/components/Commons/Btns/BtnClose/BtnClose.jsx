import React from 'react';
import style from './BtnClose.module.scss';
import btn_close__icon from "../../../../assets/img/Commons/Btns/BtnClose/btn_close__icon.svg";
import cn from "classnames";

const BtnClose = ({close, index, closeInput}) => {

	let closeFunc;

	if (closeInput) {
		closeFunc = () => close()
	} else {
		closeFunc = () => close(index)
	}


	return (
		<div className={cn(style.btn_close, 'click_reaction')} onClick={closeFunc}>
			<img src={btn_close__icon} alt="btn_close__icon"/>
		</div>
	)
};

export default BtnClose;