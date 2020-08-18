import React, {useState} from "react";
import {reduxForm} from "redux-form";
import cn from "classnames";
import ItemInput from "../../../Commons/ItemInput/ItemInput";
import {NavLink} from "react-router-dom";
import TitleWrapBlock from "../../../Blocks/TitleWrapBlock/TitleWrapBlock";


const MainForm = ({handleSubmit}) => {

	var radio = [
		{
			title: 'Мужчина',
			numb: 1,
			index: 1,
		},
		{
			title: 'Женщина',
			numb: 1,
			index: 2,
		}
	];

	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-6 form__series-wrap-3_adaptive">
				<div className="form__series form__series-1">
					<ItemInput itemInputTitle='Ваше имя'
					           name='edit-profile-main-input-1'
					           input='firstName'
					           required
					           wrapClass='input-wrap_purple'/>
					<ItemInput itemInputTitle='Ваша фамилия'
					           name='edit-profile-main-input-2'
					           required
					           input='secondName'
					           wrapClass='input-wrap_purple'/>
					<ItemInput itemInputTitle='Ваше отчество'
					           itemInputTitleMark='+ 2 z'
					           required
					           name='edit-profile-main-input-3'
					           wrapClass='input-wrap_purple'
					           input='thirdName'/>
					<ItemInput itemInputTitle='Дата рождения'
					           name='edit-profile-main-input-4'
					           itemInputTitleMark='+ 2 z'
					           required
					           wrapClass='input-wrap_purple'
					           input='date-only'/>
					<ItemInput itemInputTitle='Город'
					           name='edit-profile-main-input-5'
					           input='city'
					           required
					           itemInputTitleMark='+ 2 z'
					           wrapClass='input-wrap_purple'/>
					<ItemInput itemInputTitle='Пол'
					           name='edit-profile-main-radio-1'
					           input='radio'
					           required
					           radioItems={radio}
					           itemInputTitleMark='+ 2 z'
					           wrapClass='input-wrap_purple input-wrap_no-padding'/>
				</div>
			</div>
			<div className="form__series-wrap form__series-wrap-6 form__series-wrap-2_adaptive">
				<p className="form__series-title form__series-title-1 text-3 text-4_adaptive form__series-title-1_adaptive">Контакты</p>
				<div className="form__series form__series-1">
					<ItemInput itemInputTitle='Телефон'
					           name='edit-profile-main-input-6'
					           itemInputTitleMark='+ 2 z'
					           required
					           wrapClass='input-wrap_purple'
					           input='phone'/>
					<ItemInput itemInputTitle='E-mail'
					           name='edit-profile-main-input-7'
					           wrapClass='input-wrap_purple'
					           required
					           input='email'/>
					<ItemInput itemInputTitle='Описание'
					           name='edit-profile-main-textarea'
					           required
					           input='textarea'
					           itemInputClass='input-item-2'
					           placeholder='Текст описания'
					           wrapClass='input-wrap_purple'/>
					<TitleWrapBlock title='Изменения сохранены' success/>
				</div>
			</div>
			<div className="flex-column">
				<div className="form__series-wrap form__series-wrap-5 form__series-wrap-4_adaptive">
					<div className="form__series form__series-2">
						<NavLink to='/recovery' className={cn("btn-2 btn btn_height-1")}>
							<p className="text-7">Изменить пароль</p>
						</NavLink>
					</div>
				</div>
				<div className="form__series form__series-1 order_-1_adaptive form__series-wrap-2_adaptive">
					<button className={cn("btn-1 btn btn_height-1")}>
						<p className="text-7 text_white">Сохранить изменения</p>
					</button>
				</div>
			</div>
		</form>
	)
};

const MainReduxForm = reduxForm({form: 'edit-profile-main'})(MainForm);
export default MainReduxForm;