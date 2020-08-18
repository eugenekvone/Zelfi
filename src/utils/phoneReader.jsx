import React from 'react';


export const phoneReader = (phone) => {
	if (phone.length < 11) {
		return '8' + phone
	} else {
		return phone
	}
}
