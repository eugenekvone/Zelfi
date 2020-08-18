import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import CarouselBlock from "../CarouselBlock";
import {getTopPartic__items} from "../../../../redux/selectors/partic-selectors";


const TopPartic__CarouselBlock = ({items}) => {
	return <CarouselBlock items={items}/>
}

let mapStateToProps = (state) => {
	return {
		items: getTopPartic__items(state),
	}
};

export default compose(connect(mapStateToProps), withRouter)(TopPartic__CarouselBlock);