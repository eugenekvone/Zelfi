import React, {useEffect, useState} from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../Commons/ItemInput/ItemInput";


const Step_2_Form = () => {

    let [age, setAgeInput] = useState(true);
    let closeAgeInput = () => {setAgeInput(false)};

    return (
        <form className="flex-column">
            <div className="form__series-wrap form__series-wrap-4 form__series-wrap-2_adaptive">
                <p className="form__series-title form__series-title-1 text-3 text-4_adaptive form__series-title-1_adaptive">
                    Анкета участника</p>
                <div className="form__series form__series-1 form__series_row-gap-1">
                    <ItemInput itemInputTitle='Ваше имя'
                               input='firstName'
                               disabled
                               wrapClass='input-wrap_purple'
                               name='create_event_input-9'/>
                    <ItemInput itemInputTitle='Ваша фамилия'
                               disabled
                               wrapClass='input-wrap_purple'
                               input='secondName'
                               name='create_event_input-10'/>
                    <ItemInput itemInputTitle='Телефон'
                               disabled
                               wrapClass='input-wrap_purple'
                               name='create_event_input-11'
                               placeholder='+7 (917) 950-32-91'
                               input='input'
                               itemInputClass='input-item-3'/>
                    <ItemInput itemInputTitle='E-mail'
                               disabled
                               wrapClass='input-wrap_purple'
                               name='create_event_input-12'
                               input='email'
                               itemInputClass='input-item-3'/>
                </div>
            </div>
            {age &&
                <div className="form__series-wrap form__series-wrap-2 form__series-wrap-1_adaptive">
                    <div className="form__series form__series-1">
                        <ItemInput itemInputTitle='Ваш возраст'
                                   name='create_event_input-13'
                                   closeFunc={closeAgeInput}
                                   disabled close/>
                    </div>
                </div>
            }
        </form>
    )
};

const Step_2_ReduxForm = reduxForm({form: 'create_activity_step_2'})(Step_2_Form);
export default Step_2_ReduxForm;
