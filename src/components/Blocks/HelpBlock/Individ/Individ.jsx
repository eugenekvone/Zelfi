import React from 'react';
import IndividReduxForm from "./IndividForm/IndividForm";


const Individ = ({warningInputMode, requiredError, onSubmit}) => {
	return <IndividReduxForm warningInputMode={warningInputMode} onSubmit={onSubmit} requiredError={requiredError}/>
}

export default Individ