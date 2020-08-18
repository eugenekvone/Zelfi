import React from "react";
import {reduxForm} from "redux-form";
import Checkbox from "../../Commons/Checkbox/Checkbox";
import Search from "../../Commons/Search/Search";
import ItemInput from "../../Commons/ItemInput/ItemInput";
import btn__icon from "../../../assets/img/Main/btn__icon.svg";

const MainForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-8">
				<div className="form__series">
					<Search placeholder='Поиск мероприятия' btn_none_adaptive/>
				</div>
			</div>
			<div className="form__series-wrap">
				<div className="form__series form__series-2 form__series-1_adaptive_xl form__series-1_adaptive_lg">
					<ItemInput
						name='main_selector-1'
						placeholder='Город'
						wrapClass='input-wrap_grey'
						input='selector'/>
					<ItemInput
						name='main_selector-2'
						placeholder='Категория'
						wrapClass='input-wrap_grey'
						input='selector'/>
					<ItemInput
						name='main_date-1'
						placeholder='Дата'
						wrapClass='input-wrap_grey'
						input='date-range'/>
					<div className="flex-ver-center">
						<Checkbox title='Бесплатные мероприятия' index={1} numb={1} name='main-checkbox'/>
					</div>
					<div className="btn btn-1 btn_height-2 active_adaptive_flex">
						<p className="text-7 text_white">Найти</p>
						<img src={btn__icon} alt="btn__icon" className="btn__icon_right"/>
					</div>
				</div>
			</div>
		</form>
	)
};

const MainReduxForm = reduxForm({form: 'edit-main'})(MainForm);
export default MainReduxForm;