import React from 'react';


export const NumbFormat = (numb) => {
	return numb.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}