import React from 'react';


const RequiredInput = (value) => {
	if (value) {
		return undefined
	} else {
		return 'Обязательное поле'
	}
}

const RequiredCheckbox = (value) => {
	if (value) {
		return undefined
	} else {
		return 'Нужно подтвердить'
	}
}

const RequiredNone = () => {
}

export const Required = (required, type) => {
	if (required) {
		switch (type) {
			case 'input':
				return RequiredInput;
			case 'checkbox':
				return RequiredCheckbox;
			default:
				return RequiredNone;
		}

	} else {
		return RequiredNone
	}
}

