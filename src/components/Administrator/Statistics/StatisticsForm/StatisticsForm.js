import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../Commons/ItemInput/ItemInput";
import btn_icon from "../../../../assets/img/Administrator/Statistics/btn_icon.svg";

const StatisticsForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap form__series-wrap-1 form__series-wrap-2_adaptive">
				<div className="form__series form__series-1">
					<ItemInput itemInputTitle={'Статистика'}
					           name={'edit-admin-statistics-selector'}
					           input={'selector'}/>
					<ItemInput itemInputTitle={'Дата начала периода'}
					           name={'edit-admin-statistics-date'}
					           input={'date-range'}/>
					<div className="btn-1 btn btn_height-1 flex-bottom">
						<img src={btn_icon} alt="btn_icon" className='btn__icon_left'/>
						<p className="text-7 text_white">Выгрузить</p>
					</div>
				</div>
			</div>
		</form>
	)
};

const StatisticsReduxForm = reduxForm({form: 'edit-admin-statistics'})(StatisticsForm);
export default StatisticsReduxForm;