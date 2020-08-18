import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import GridBlock from "../GridBlock";
import {getRecommendActivity__items} from "../../../../redux/selectors/activity-selectors";
import {changeFavorite} from "../../../../redux/reducers/activity-reducer";


const RecommendActivity__GridBlock = ({items, changeFavorite}) => {
	return <GridBlock items={items} changeFavorite={changeFavorite}/>
}

let mapStateToProps = (state) => {
	return {
		items: getRecommendActivity__items(state),
	}
};

export default compose(connect(mapStateToProps, {changeFavorite}), withRouter)(RecommendActivity__GridBlock);