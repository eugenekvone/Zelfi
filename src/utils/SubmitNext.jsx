import React from 'react';


export const SubmitNext = (onSubmit, history, linkNext) => {
	return (formData) => {
		onSubmit(formData);
		history.push(linkNext);
	}
}

