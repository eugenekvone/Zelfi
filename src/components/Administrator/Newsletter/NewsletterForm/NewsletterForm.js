import React from "react";
import {reduxForm} from "redux-form";
import cn from "classnames";
import style from './NewsletterForm.module.scss';
import ItemInput from "../../../Commons/ItemInput/ItemInput";
import Radio from "../../../Commons/Radio/Radio";
import TextRedactor from "../../../Commons/TextRedactor/TextRedactor";
import TitleWrapBlock from "../../../Blocks/TitleWrapBlock/TitleWrapBlock";

const NewsletterForm = ({handleSubmit}) => {

	let initialState = {
		radio: [
			{
				title: 'Письмо на E-mail',
				numb: 1,
				index: 1,
			},
			{
				title: 'Уведомление на сайте',
				numb: 1,
				index: 2,
			}
		]
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-6 form__series-wrap-7_adaptive">
				<p className="form__series-title form__series-title-1 text-3
                text-5_adaptive form__series-title-1_adaptive">Поиск пользователей</p>
				<div className="form__series form__series-1">
					<ItemInput itemInputTitle={'Дата регистрации'}
					           name={'create_admin-newsletter_date'}
					           input={'date'}/>
					<ItemInput itemInputTitle={'Город'}
					           name={'create_admin-newsletter_selector-1'}
					           input={'selector'}/>
					<ItemInput itemInputTitle={'Категория пользоватлей'}
					           name={'create_admin-newsletter_selector-2'}
					           input={'selector'}/>
				</div>
			</div>
			<div className="form__series-wrap form__series-wrap-3 form__series-wrap-1_adaptive">
				<div className="form__series form__series-10 flex-ver-center form__series-1_adaptive">
					<p className="text-17 text_pink text_center_adaptive">Найдено 12 378 пользователей</p>
					<div className="btn-2 btn btn_height-1 order_-1_adaptive">
						<p className="text-7">Очистить поиск</p>
					</div>
				</div>
			</div>
			<p className={cn(style.text_1, "text-8 none_adaptive")}>Отправить как</p>
			<div className="form__series-wrap form__series-wrap-5">
				<Radio items={initialState.radio} name={'create_admin-newsletter_radio'} radio={2}/>
			</div>
			<div className="form__series-wrap form__series-wrap-5">
				<div className="form__series">
					<ItemInput itemInputTitle={'Тема письма'} name={'create_admin-newsletter_input'}/>
				</div>
			</div>
			<div className="form__series-wrap form__series-wrap-6 form__series-wrap-2_adaptive">
				<p className={cn("text-7", style.text_2)}>Текст</p>
				<TextRedactor/>
			</div>
			<div className="form__series form__series-6 form__series-1_adaptive">
				<div className="btn-2 btn btn_height-1">
					<p className="text-7">Отменить</p>
				</div>
				<div className="btn-1 btn btn_height-1 order_-1_adaptive">
					<p className="text-7 text_white">Отправить</p>
				</div>
				<div className="form__series order_-2_adaptive">
					<TitleWrapBlock title={'Письмо не отправлено!'}/>
					<TitleWrapBlock title={'Письмо успешно отправалено!'} success/>
				</div>
			</div>
		</form>
	)
};

const NewsletterReduxForm = reduxForm({form: 'edit-admin-newsletter-events'})(NewsletterForm);
export default NewsletterReduxForm;