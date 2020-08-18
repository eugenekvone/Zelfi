import React from 'react';


export const areEqual = (prevProps, nextProps) => {
	return prevProps == nextProps
}

export const areEqualForm = (prevProps, nextProps) => prevProps.handleSubmit == nextProps.handleSubmit;
