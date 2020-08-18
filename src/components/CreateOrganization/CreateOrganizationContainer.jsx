import React, {useEffect} from 'react';
import {connect} from "react-redux";
import CreateOrganization from "./CreateOrganization";
import {getCitys} from "../../redux/reducers/public-reducer";
import {CreateOrganizationSubmit} from "../../redux/reducers/create_organization-reducer";

const CreateOrganizationContainer = (props) => {
	useEffect(() => {
		props.getCitys();
	}, []);

	return <CreateOrganization {...props} citys={props.citys}/>
};

let mapStateToProps = (state) => ({
	citys: state.public.citys,
});

let mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (formData) => dispatch(CreateOrganizationSubmit(formData)),
		getCitys: () => dispatch(getCitys())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrganizationContainer);