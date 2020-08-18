import React from "react";
import {reduxForm} from "redux-form";
import style from './BuyForm.module.scss';
import ItemInput from "../../../Commons/ItemInput/ItemInput";
import Radio from "../../../Commons/Radio/Radio";
import {NavLink} from "react-router-dom";


const BuyForm = ({handleSubmit}) => {

	let initialState = {
		radio_2: [
			{
				title: '17.11.2019',
				numb: 3,
				index: 1,
				text: '19:00'
			},
			{
				title: '19.11.2019',
				numb: 3,
				index: 2,
				text: '21:00'
			},
			{
				title: '21.11.2019',
				numb: 3,
				index: 3,
				text: '18:00'
			},
			{
				title: '23.11.2019',
				numb: 3,
				index: 4,
				text: '17:00'
			},
		],
		radio_3: [
			{
				title: 'Вариант №1',
				price: '1 290',
				text: '+ 50 z',
				index: 1,
				numb: 4,
			},
			{
				title: 'Средний вариант',
				price: '1 590',
				text: '+ 100 z',
				index: 2,
				numb: 4,
			},
			{
				title: 'Самый дешевый',
				price: '1 890',
				text: '+ 150 z',
				index: 3,
				numb: 4,
			},
		]
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-6 form__series-wrap-2_adaptive">
				<p className="form__series-title form__series-title-1 none_adaptive">
					Дата мероприятия
				</p>
				<p className='text-3 text-4_adaptive form__series-title-1_adaptive active_adaptive'>
					Купить билет
				</p>
				<Radio items={initialState.radio_2} name='buy_radio-1' radio={2}/>
			</div>
			<div className={style.block_1}>
				<p className='text-3 text-5_adaptive form__series-title-1_adaptive active_adaptive'>
					Варианты/зоны
				</p>
				<Radio items={initialState.radio_3} name='buy_radio-2' radio={3}/>
			</div>
			<div className="form__series-wrap form__series-wrap-5">
				<div className="form__series">
					<ItemInput itemInputTitle='Количество билетов'
					           itemInputTitleClass='text-5_adaptive form__series-title-1_adaptive'
					           name='buy-input-7'
					           input='stepper'/>
				</div>
			</div>
			<div className="form__series-wrap form__series-wrap-9 form__series-wrap-3_adaptive">
				<p className="form__series-title form__series-title-1 text-3 text-5_adaptive form__series-title-1_adaptive">Вопросы
					от организатора</p>
				<div className="form__series form__series-1">
					<ItemInput itemInputTitle='Ваше имя'
					           input='firstName'
					           name='buy-input-1'/>
					<ItemInput itemInputTitle='Ваша фамилия'
					           input='secondName'
					           name='buy-input-2'/>
					<ItemInput itemInputTitle='Телефон'
					           name='buy-input-3'
					           itemInputClass='input-item-3'
					           input='phone'/>
					<ItemInput itemInputTitle='E-mail'
					           input='email'
					           name='buy-input-4'/>
					<ItemInput itemInputTitle='Размер одежды'
					           name='buy-input-5'
					           placeholder='S, M, L'
					           itemInputClass='input-item-3'/>
				</div>
			</div>
			<div className="form__series-wrap form__series-wrap-7 form__series-wrap-2_adaptive">
				<div className="form__series form__series-1">
					<ItemInput itemInputTitle='Итоговая сумма'
					           disabled
					           input='price'
					           name='buy-input-6'
					           inputClass='text-17'
					           wrapClass='input-wrap_purple'
					           placeholder='1 500'/>
				</div>
			</div>
			<div className="form__series form__series-2 form__series-1_adaptive">
				<div className="btn-2 btn btn_height-1">
					<p className="text-7">Отмена</p>
				</div>
				<NavLink to='/buy/finish' className="btn-1 btn btn_height-1 order_-1_adaptive">
					<p className="text-7 text_white">Подтвердить и оплатить</p>
				</NavLink>
			</div>
		</form>
	)
};

const BuyReduxForm = reduxForm({form: 'edit-buy'})(BuyForm);
export default BuyReduxForm;