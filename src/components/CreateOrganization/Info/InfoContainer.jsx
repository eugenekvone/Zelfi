import React from 'react';
import {connect} from "react-redux";
import {addCreateOrganizationRequisite} from "../../../redux/reducers/create_organization-reducer";
import Info from "./Info";

let mapStateToProps = () => ({});

let mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (formData) => dispatch(addCreateOrganizationRequisite(formData)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);