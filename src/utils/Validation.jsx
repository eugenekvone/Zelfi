import React from 'react';


export const validateNone = value => {}

export const emailValidate = value => (
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
		'Неверный адрес электронной почты' : undefined
)

export const passwordConfirm = (input, allInputs) =>
	allInputs['password_confirmed_input_1'] == allInputs['password_confirmed_input_2'] ? undefined : 'Пароль не совпадает';

export const timeValidate = value => {

	let valueItem = ''

	if (value) valueItem = value

	const stringValue = valueItem.toString();

	if (parseInt(stringValue.substr(0, 2)) < 24 && parseInt(stringValue.substr(2, 2)) < 60) {
		return undefined
	} else {
		return 'Введите корректное время'
	}
}

