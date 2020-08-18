import React from 'react';
import LegalReduxForm from "./LegalForm/LegalForm";


const Legal = ({radio, warningInputMode, onSubmit, requiredError}) => {
	return <LegalReduxForm radio={radio} requiredError={requiredError}
	                       warningInputMode={warningInputMode} onSubmit={onSubmit}/>
}

export default Legal