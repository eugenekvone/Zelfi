import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Step_1 from "./Step_1";
import {
    addCreateActivityData,
    addCreateActivityDate,
    CreateActivityDateDelete,
} from "../../../redux/reducers/create_activity-reducer";
import {useHistory} from "react-router-dom";
import {SubmitNext} from "../../../utils/SubmitNext";
import {getAllOrganizations} from "../../../redux/reducers/organizations-reducer";
import {getAgeRatings, getCategorys, getCitys} from "../../../redux/reducers/public-reducer";


const Step_1_Container = (props) => {

    useEffect(() => {
        props.getOrganizations();
        props.getCategorys();
        props.getAgeRatings();
        props.getCitys();
    }, []);

    const history = useHistory();
    let onSubmit = SubmitNext(props.onSubmit, history, props.urlNext);

    return <Step_1 {...props} onSubmit={onSubmit} history={history}/>
};

let mapStateToProps = (state) => ({
    data_dates: state.create_activity.data_dates,
    all_organizations: state.organizations.all_organizations,
    categorys: state.public.categorys,
    age_ratings: state.public.age_ratings,
    citys: state.public.citys,
});

let mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (formData) => {
            dispatch(addCreateActivityData(formData))
            dispatch(addCreateActivityDate())
        },
        addDate: (formData) => dispatch(addCreateActivityDate(formData)),
        deleteDate: (index) => dispatch(CreateActivityDateDelete(index)),
        getOrganizations: () => dispatch(getAllOrganizations()),
        getCategorys: () => dispatch(getCategorys()),
        getAgeRatings: () => dispatch(getAgeRatings()),
        getCitys: () => dispatch(getCitys()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Step_1_Container);