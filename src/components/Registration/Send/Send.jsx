import React from 'react';
import style from './Send.module.scss';
import {useHistory} from "react-router-dom";


const Send = (props) => {

	const history = useHistory();

	let access_token = window.location.href.split('token=')[1];

	if (access_token) {
		props.addToken(access_token);
		history.push(props.linkNext)
	}

	return (
		<div className={style.send}>
			<p className="text-30 text_center text-3_adaptive">
				<span>На адрес event@event.ru выслано письмо со ссылкой для потдверждения,</span>
				<br></br>
				откройте его и перейдите по ссылке для заверения регистрации</p>
		</div>
	)
};

export default Send;