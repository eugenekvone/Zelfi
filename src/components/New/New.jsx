import React from 'react';
import {connect} from "react-redux";
import {addCategory, addCity, addOrganization} from "../../redux/reducers/add";


const New = (props) => {
	return (
		<div className='content container inner_1 flex-column'>
			<div className="btn btn-1 btn_height-1" onClick={props.addOrganization}>
				<p className="text-7 text_white">Добавить организацию</p>
			</div>
			<div className="btn btn-1 btn_height-1" onClick={props.addCategory}>
				<p className="text-7 text_white">Добавить категорию</p>
			</div>
			<div className="btn btn-1 btn_height-1" onClick={props.addCity}>
				<p className="text-7 text_white">Добавить город</p>
			</div>
		</div>
	)
};

let mapStateToProps = () => ({});

export default connect(mapStateToProps, {addOrganization, addCategory, addCity})(New);