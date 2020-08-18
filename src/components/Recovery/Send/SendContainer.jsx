import React from 'react';
import {setRecoveryAccessToken} from "../../../redux/reducers/auth-reducer";
import {connect} from "react-redux";
import Send from "./Send";

let mapStateToProps = () => ({});

let mapDispatchToProps = (dispatch) => {
	return {
		addToken: (token) => {
			dispatch(setRecoveryAccessToken(token));
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Send);