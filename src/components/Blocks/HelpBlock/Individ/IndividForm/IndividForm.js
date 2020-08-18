import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../../Commons/ItemInput/ItemInput";

const IndividForm = ({handleSubmit, warningInputMode, requiredError, submitFailed, invalid}) => {

	requiredError(submitFailed && invalid)

	return (
		<form onSubmit={handleSubmit} className='flex-column'>
			<div className="form__series-wrap form__series-wrap-6 form__series-wrap-2_adaptive">
				<p className="form__series-title form__series-title-1 text-3
                text-5_adaptive form__series-title-1_adaptive">Персональная
					информация</p>
				<div className="form__series form__series-1 form__series_row-gap-2 form__series-2_adaptive">
					<ItemInput itemInputTitle='Ф.И.О.' name='create_event_input-17' input='fullName' required/>
					<ItemInput itemInputTitle='Телефон' name='create_event_input-18' input='phone' required/>
					<ItemInput itemInputTitle='E-mail' name='create_event_input-19' input='email' required/>
					<ItemInput itemInputTitle='ИНН' name='individualTaxNumber' required/>
				</div>
			</div>
			<div className="form__series-wrap form__series-wrap-6 form__series-wrap-2_adaptive">
				<p className="form__series-title form__series-title-1 text-3
                text-5_adaptive form__series-title-1_adaptive">Паспортные данные</p>
				<div className="form__series form__series-1 form__series_row-gap-2 form__series-2_adaptive">
					<ItemInput itemInputTitle='Серия и номер паспорта'
					           required
					           name='passport_number'
					           inputInvalid={warningInputMode}/>
					<ItemInput itemInputTitle='Когда выдан'
					           required
					           name='passport_date'
					           input='date'
					           inputInvalid={warningInputMode}/>
					<ItemInput itemInputTitle='Кем выдан'
					           required
					           name='passport_who'
					           inputInvalid={warningInputMode}/>
					<ItemInput itemInputTitle='Адрес регистрации'
					           required
					           name='legal_address'
					           inputInvalid={warningInputMode}/>
					<ItemInput itemInputTitle='Почтовый адрес'
					           required
					           name='person_comment_payment'
					           inputInvalid={warningInputMode}/>
				</div>
			</div>
			<div className="form__series-wrap form__series-wrap-7 form__series-wrap-2_adaptive">
				<p className="form__series-title form__series-title-1 text-3
                text-5_adaptive form__series-title-1_adaptive">Дополнительная
					информация</p>
				<div className="form__series form__series-1 form__series_row-gap-2 form__series-2_adaptive">
					<ItemInput itemInputTitle='Наименование банка'
					           required
					           name='create_event_input-25'
					           inputInvalid={warningInputMode}/>
					<ItemInput itemInputTitle='БИК'
					           required
					           name='create_event_input-26'
					           inputInvalid={warningInputMode}/>
					<ItemInput itemInputTitle='Корреспондентский счет'
					           required
					           name='create_event_input-27'
					           inputInvalid={warningInputMode}/>
					<ItemInput itemInputTitle='Расчетный счет'
					           required
					           name='create_event_input-28'
					           inputInvalid={warningInputMode}/>
				</div>
			</div>
			<div className="form__series-wrap form__series-wrap-6 form__series-wrap-5_adaptive">
				<div className="form__series">
					<ItemInput itemInputTitle='Комментарий для перевода денег'
					           itemInputTitleClass='flex-column_adaptive'
					           required
					           itemInputTitleSpan='(Например, номер банковской карты или назначение платежа)'
					           name='create_event_input-29'/>
				</div>
			</div>
		</form>
	)
};

const IndividReduxForm = reduxForm({form: 'requisites_individ'})(IndividForm);
export default IndividReduxForm;