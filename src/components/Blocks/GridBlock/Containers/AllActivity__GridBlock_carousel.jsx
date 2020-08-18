import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getAllActivity__items} from "../../../../redux/selectors/activity-selectors";
import {changeFavorite} from "../../../../redux/reducers/activity-reducer";
import GridBlock_carousel from "../GridBlock_carousel";

const AllActivity__GridBlock_carousel = ({items, changeFavorite}) => {
	return <GridBlock_carousel items={items} changeFavorite={changeFavorite}/>
}

let mapStateToProps = (state) => {
	return {
		items: getAllActivity__items(state),
	}
};

export default compose(connect(mapStateToProps, {changeFavorite}), withRouter)(AllActivity__GridBlock_carousel);