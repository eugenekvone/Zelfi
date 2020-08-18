import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../Commons/ItemInput/ItemInput";
import {NavLink} from "react-router-dom";
import TextRedactor from "../../../Commons/TextRedactor/TextRedactor";
import Block_14 from "../../../Blocks/PhotoBlock/PhotoBlock";

const MainForm = ({handleSubmit, urlBack, urlNext, citys}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-5">
				<p className="form__series-title form__series-title-1 text-3 form__series-title-1_adaptive">Общая
					информация</p>
				<div className="form__series form__series-3">
					<ItemInput itemInputTitle='Название' name='name' required/>
				</div>
			</div>
			<div className="form__series-wrap form__series-wrap-2 form__series-wrap-2_adaptive">
				<p className="form__series-title
                form__series-title-1 text-7
                text-4_adaptive
                form__series-title-1_adaptive">Фотографии профиля</p>
				<Block_14 minimal/>
			</div>
			<div className="form__series-wrap form__series-wrap-3 form__series-wrap-3_adaptive">
				<p className="form__series-title form__series-title-3 text-3
                form__series-title-1_adaptive">Контактные данные</p>
				<div className="form__series form__series-1">
					<ItemInput itemInputTitle='Телефон' name='contact_phone' input='phone' required/>
					<ItemInput itemInputTitle='E-mail' name='contact_email' input='email' required/>
					<ItemInput itemInputTitle='Город'
					           required
					           selector_type='citys'
					           name='contact_city_id'
					           input='selector'
					           options={citys}/>
				</div>
			</div>
			<div className="form__series-wrap form__series-wrap-2 form__series-wrap-2_adaptive">
				<div className="form__series">
					<div className='grid-restraint'>
						<p className="input-title text-7 text-4_adaptive">Описание</p>
						<TextRedactor name='description' required/>
					</div>
				</div>
			</div>
			<div className="form__series form__series-2 form__series-1_adaptive">
				<NavLink to={urlBack} className="btn btn-2 btn_height-1">
					<p className="text-7">Отменить</p>
				</NavLink>
				<button className="btn btn-1 btn_height-1 order_-1_adaptive">
					<p className="text-7 text_white">Далее</p>
				</button>
			</div>
		</form>
	)
}

const MainReduxForm = reduxForm({form: 'create_organization'})(MainForm);
export default MainReduxForm;