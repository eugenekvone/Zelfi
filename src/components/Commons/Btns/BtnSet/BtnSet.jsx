import React, {useState} from 'react';
import style from './BtnSet.module.scss';
import Item from "./Item/Item";


const BtnSet = () => {

	let [btn_1, setBtn_1] = useState(true);
	let [btn_2, setBtn_2] = useState(false);
	let [btn_3, setBtn_3] = useState(false);

	let activeBtn_1 = () => {
		closeAll();
		setBtn_1(true);
	};
	let activeBtn_2 = () => {
		closeAll();
		setBtn_2(true);
	};
	let activeBtn_3 = () => {
		closeAll();
		setBtn_3(true);
	};

	let closeAll = () => {
		setBtn_1(false);
		setBtn_2(false);
		setBtn_3(false);
	}

	return (
		<div className={style.block}>
			<Item title={'Все'} active={btn_1} click={activeBtn_1}/>
			<Item title={'Платные'} active={btn_2} click={activeBtn_2}/>
			<Item title={'Бесплатные'} active={btn_3} click={activeBtn_3}/>
		</div>
	)
};

export default BtnSet;