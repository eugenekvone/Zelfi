import React from "react";
import ItemInput from "../../../Commons/ItemInput/ItemInput";
import cn from "classnames";
import style from "./Step_1_Form.module.scss";
import BtnClose from "../../../Commons/Btns/BtnClose/BtnClose";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";


const DataDate_Form = ({data_dates, deleteDate}) => {
    return (
        <form className="flex-column">
            {data_dates && data_dates.map(d =>
                <div className={style.block_2}>
                    <div className="form__series-wrap">
                        <div className={cn("form__series", style.block_1)}>
                            <ItemInput itemInputTitle='Дата начала'
                                       disabled
                                       disabled_trans
                                       name={'create_activity_date_start_' + d.other.index}
                                       input='date'/>
                            <ItemInput itemInputTitle='Время начала'
                                       disabled
                                       disabled_trans
                                       name={'create_activity_time_start_' + d.other.index}
                                       input='time'/>
                            <div className={cn(style.line_wrap, style.line_wrap_2)}>
                                <div className={style.line}></div>
                            </div>
                            <ItemInput itemInputTitle='Дата окончания'
                                       disabled
                                       disabled_trans
                                       name={'create_activity_date_end_' + d.other.index}
                                       input='date'/>
                            <ItemInput itemInputTitle='Время окончания'
                                       disabled
                                       disabled_trans
                                       name={'create_activity_time_end_' + d.other.index}
                                       input='time'/>
                            <BtnClose close={deleteDate} index={d.other.index}/>
                        </div>
                    </div>
                </div>
            )}
        </form>
    )
};

const mapStateToProps = (state) => ({
    initialValues: state.create_activity.dates,
})

export default connect(mapStateToProps)(reduxForm({form: 'create_activity_data_date'})(DataDate_Form));
