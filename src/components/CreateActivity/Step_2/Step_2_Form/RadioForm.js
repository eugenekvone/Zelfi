import React, {useState} from "react";
import {reduxForm} from "redux-form";
import Radio from "../../../Commons/Radio/Radio";
import {connect} from "react-redux";


const RadioForm = ({handleSubmit, data_dates}) => {
    return (
        <form onSubmit={handleSubmit} className="form__series-wrap form__series-wrap-8">
            <p className="form__series-title form__series-title-1 text-3 text-4_adaptive form__series-title-2_adaptive">
                Информация о билетах и стоимости
            </p>
            <Radio items={data_dates} name='create_activity_radio' radio={2}/>
        </form>
    )
};

const mapStateToProps = () => ({
    initialValues: {create_activity_radio: '0'}
})

export default connect(mapStateToProps)(reduxForm({form: 'create_activity_step_2_radio'})(RadioForm));
