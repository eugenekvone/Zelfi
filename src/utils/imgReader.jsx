import React from 'react';


export const imgReader = (img, set, dispatch) => {
	const reader = new FileReader();
	reader.readAsDataURL(img);
	reader.onload = (readerEvent) => {
		let file = reader.result;
		dispatch(set(file));
	}
}
