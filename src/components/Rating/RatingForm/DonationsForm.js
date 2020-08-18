import React from "react";
import {reduxForm} from "redux-form";
import Search from "../../Commons/Search/Search";
import ItemInput from "../../Commons/ItemInput/ItemInput";
import BtnSorting from "../../Commons/Btns/BtnSorting/BtnSorting";


const RatingForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-1 form__series-wrap-3_adaptive">
				<Search placeholder={'Поиск участника'}/>
			</div>
			<div className="form__series-wrap">
				<div className="form__series form__series-1 form__series_row-gap-5 form__series-1_adaptive">
					<ItemInput itemInputTitle={'Город'}
					           name={'create_rating_selector-1'}
					           input={'selector'}/>
					<div className="flex-ver-center btn_height-1 flex-bottom">
						<BtnSorting title={'По рейтингу'}/>
					</div>
				</div>
			</div>
		</form>
	)
};

const RatingReduxForm = reduxForm({form: 'edit-rating-events'})(RatingForm);
export default RatingReduxForm;