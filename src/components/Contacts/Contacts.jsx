import React from 'react';
import style from './Contacts.module.scss';
import cn from "classnames";
import Title from "../Commons/Title/Title";
import icon from "../../assets/img/Contacts/icon.svg";
import ContactsReduxForm from "./ContactsForm/ContactsForm";


const Contacts = ({onSubmit, success, setCallback}) => {
	return (
		<div className='content container'>
			<Title title={'Контакты'}/>
			<div className={style.block}>
				<div>
					<div className="case">
						<p className={cn(style.text_1, "text-7")}>Телефон</p>
						<p className={cn(style.text_2, "text-31 text-4_adaptive")}>8 (800) 999-88-77</p>
						<p className={cn(style.text_1, "text-7")}>E-mail</p>
						<a href="mailto:event@event.ru"
						   className={cn(style.text_2, 'text-32 link link-1 text-4_adaptive')}>
							event@event.ru
						</a>
						<p className={cn(style.text_1, "text-7")}>Адрес</p>
						<p className={style.text_2}>
							<span className={cn(style.text_3, "text-32 text-4_adaptive")}>420012, г. Казань, ул. Волкова, д. 7/29</span>
						</p>
						<p className={cn(style.text_1, "text-7")}>Реквизиты</p>
						<div className={cn(style.btn, "btn btn-2 btn_height-1 flex-left")}>
							<img src={icon} alt="icon" className='btn__icon_left'/>
							<p className="text-7">Скачать PDF</p>
						</div>
					</div>
				</div>
				<div>
					<div className="case">
						<ContactsReduxForm onSubmit={onSubmit} success={success} setCallback={setCallback}/>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Contacts;