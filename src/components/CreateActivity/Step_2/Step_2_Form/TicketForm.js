import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../Commons/ItemInput/ItemInput";
import cn from "classnames";
import Checkbox from "../../../Commons/Checkbox/Checkbox";
import style from "./TicketForm.module.scss";


const TicketForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form__series-wrap form__series-wrap-2 form__series-wrap-2_adaptive">
                <div className={cn("form__series form__series-2", style.block_1)}>
                    <ItemInput itemInputTitle='Название билета'
                               required
                               name='create_activity_ticket_name'/>
                    <div className="form__series form__series-3 form__series-3_adaptive">
                        <ItemInput itemInputTitle='Количество'
                                   type='number'
                                   required
                                   name='create_activity_ticket_number'/>
                        <div className="flex-ver-center btn_height-1 flex-bottom">
                            <Checkbox title='Безлимитно' index={2} numb={1}
                                      name='create_activity_ticket_unlimited'/>
                        </div>
                    </div>
                    <div className="form__series form__series-3 form__series-3_adaptive">
                        <ItemInput itemInputTitle='Стоимость'
                                   type='number'
                                   required
                                   name='create_activity_ticket_price'/>
                        <div className="flex-ver-center btn_height-1 flex-bottom">
                            <Checkbox title='Бесплатно' index={2} numb={2}
                                      name='create_activity_ticket_free'/>
                        </div>
                    </div>
                    <button className="btn-1 btn btn_height-1 flex-bottom">
                        <p className="text-7 text_white">Сформировать билет</p>
                    </button>
                </div>
            </div>
        </form>
    )
};

const TicketReduxForm = reduxForm({form: 'create_activity_ticket'})(TicketForm);
export default TicketReduxForm;
