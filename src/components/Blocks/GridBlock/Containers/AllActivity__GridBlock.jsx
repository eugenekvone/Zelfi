import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import GridBlock from "../GridBlock";
import {getAllActivity__items} from "../../../../redux/selectors/activity-selectors";
import {changeFavorite} from "../../../../redux/reducers/activity-reducer";

const AllActivity__GridBlock = ({items, changeFavorite}) => {
	return <GridBlock items={items} changeFavorite={changeFavorite}/>
}

let mapStateToProps = (state) => {
	return {
		items: getAllActivity__items(state),
	}
};

export default compose(connect(mapStateToProps, {changeFavorite}), withRouter)(AllActivity__GridBlock);