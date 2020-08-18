import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../../Commons/ItemInput/ItemInput";
import Radio from "../../../../Commons/Radio/Radio";

const LegalForm = ({handleSubmit, radio, warningInputMode, requiredError, submitFailed, invalid}) => {

	requiredError(submitFailed && invalid)

	return (
		<form onSubmit={handleSubmit} className='flex-column'>
			<div className="form__series-wrap form__series-wrap-6 form__series-wrap-2_adaptive">
				<p className="form__series-title form__series-title-1
                text-3 text-5_adaptive form__series-title-1_adaptive">Персональная информация</p>
				<div className="form__series form__series-1">
					<ItemInput itemInputTitle='Ф.И.О.' name='fullName' input='fullName' required/>
					<ItemInput itemInputTitle='Телефон' name='phone' input='phone' required/>
					<ItemInput itemInputTitle='E-mail' name='email' input='email' required/>
				</div>
			</div>
			<div className="form__series-wrap form__series-wrap-2 form__series-wrap-2_adaptive">
				<p className="form__series-title form__series-title-1 text-3
                text-5_adaptive form__series-title-1_adaptive">Информация о компании</p>
				<div className="form__series form__series-1 form__series_row-gap-3 form__series-2_adaptive">
					<ItemInput itemInputTitle='Название компании'
					           required
					           name='organization_name'
					           inputInvalid={warningInputMode}/>
					<ItemInput itemInputTitle='ИНН' name='individualTaxNumber'
					           required
					           inputInvalid={warningInputMode}/>
					<ItemInput itemInputTitle='КПП'
					           required
					           name='organization_cof'
					           inputInvalid={warningInputMode}/>
					<ItemInput itemInputTitle='ОГРН (ИП)'
					           required
					           name='organization_primary_state_reg_number'
					           inputInvalid={warningInputMode}/>
					<ItemInput itemInputTitle='Юридический адрес'
					           required
					           name='legal_address'
					           inputInvalid={warningInputMode}/>
					<ItemInput itemInputTitle='Почтовый адрес'
					           required
					           name='mail_address'
					           inputInvalid={warningInputMode}/>
					<ItemInput itemInputTitle='Ф.И.О. подписывающего лица'
					           name='organization_signatory_person_full_name'
					           required
					           inputInvalid={warningInputMode}/>
					<ItemInput itemInputTitle='Должность подписывающего лица'
					           name='create_event_input-41'
					           required
					           inputInvalid={warningInputMode}/>
				</div>
			</div>
			<div className="form__series-wrap form__series-wrap-6 form__series-wrap-2_adaptive">
				<div className="form__series">
					<Radio name='organization_type_tax' items={radio} radio={1}/>
				</div>
			</div>
			<div className="form__series-wrap form__series-wrap-6 form__series-wrap-5_adaptive">
				<div className="form__series form__series-1 form__series_row-gap-3 form__series-2_adaptive">
					<ItemInput itemInputTitle='Наименование банка'
					           name='bank_name'
					           required
					           inputInvalid={warningInputMode}/>
					<ItemInput itemInputTitle='БИК'
					           required
					           name='bank_identification_code'
					           inputInvalid={warningInputMode}/>
					<ItemInput itemInputTitle='Корреспондентский счет'
					           name='bank_correspondent'
					           required
					           inputInvalid={warningInputMode}/>
					<ItemInput itemInputTitle='Расчетный счет организации или ИП'
					           name='bank_account_number'
					           required
					           inputInvalid={warningInputMode}/>
				</div>
			</div>
		</form>
	)
};

const LegalReduxForm = reduxForm({form: 'requisites_legal'})(LegalForm);
export default LegalReduxForm;