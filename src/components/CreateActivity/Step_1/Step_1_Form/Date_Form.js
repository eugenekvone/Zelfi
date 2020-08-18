import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../Commons/ItemInput/ItemInput";
import cn from "classnames";
import style from "./Step_1_Form.module.scss";


const Date_Form = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form__series-wrap form__series-wrap-3 form__series-wrap-2_adaptive">
                <div className={cn("form__series", style.block_1)}>
                    <ItemInput itemInputTitle='Дата начала' name='create_activity_date_start' input='date' required/>
                    <ItemInput itemInputTitle='Время начала' name='create_activity_time_start' input='time' required/>
                    <div className={cn(style.line_wrap, style.line_wrap_1)}>
                        <div className={style.line}></div>
                    </div>
                    <ItemInput itemInputTitle='Дата окончания' name='create_activity_date_end' input='date' required/>
                    <ItemInput itemInputTitle='Время окончания' name='create_activity_time_end' input='time' required/>
                </div>
            </div>
            <button className={cn(style.btn_2, "btn-2 btn btn_height-1")}>
                <p className="text-7">+ Добавить дату</p>
            </button>
        </form>
    )
};

const DateReduxForm = reduxForm({form: 'create_activity_date'})(Date_Form);
export default DateReduxForm;
