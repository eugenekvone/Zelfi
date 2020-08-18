import React from 'react';
import Step_1_ReduxForm from "./Step_1_Form/Step_1_Form";


const Step_1 = (props) => {
	return <Step_1_ReduxForm urlNext={props.urlNext}
	                         history={props.history}
	                         onSubmit={props.onSubmit}
	                         categorys={props.categorys}
	                         citys={props.citys}
	                         data_dates={props.data_dates}
	                         all_organizations={props.all_organizations}
	                         age_ratings={props.age_ratings}
	                         deleteDate={props.deleteDate}
	                         addDate={props.addDate}/>
}
export default Step_1