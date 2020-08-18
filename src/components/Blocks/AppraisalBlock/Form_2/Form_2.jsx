import React from "react";
import {reduxForm} from "redux-form";
import style from './Form_2.module.scss';
import cn from "classnames";
import ItemInput from "../../../Commons/ItemInput/ItemInput";
import {NumbFormat} from "../../../../utils/NumbFormat";


const Form_2 = ({handleSubmit, modal}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form__series-wrap">
				<p className="form__series-title form__series-title-1 text-3 text-1_adaptive form__series-title-1_adaptive">
					Поддержать организатора чаевыми
				</p>
				<div className="form__series form__series-1">
					<ItemInput itemInputTitleMark={'+ ' + NumbFormat(100) + ' z'}
					           name='block_7__input'
					           itemInputTitle='Сумма'/>
					<div className={cn(style.btn, "btn btn-1 btn_height-1")} onClick={modal}>
						<p className="text-7 text_white">Отправить</p>
					</div>
					<div className="flex-ver-center none_adaptive">
						<p className="text-13 text_pink">+ {NumbFormat(100)} z</p>
					</div>
				</div>
			</div>
		</form>
	)
};

const Form_2_ReduxForm = reduxForm({form: 'edit-block_7__form_1'})(Form_2);
export default Form_2_ReduxForm;