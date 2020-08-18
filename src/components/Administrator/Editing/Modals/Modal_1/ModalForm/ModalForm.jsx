import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../../../Commons/ItemInput/ItemInput";
import style from './ModalForm.module.scss';


const ModalForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={style.block_1}>
                <div className="form__series-wrap">
                    <p className="form__series-title form__series-title-1 text-3 form__series-title-1_adaptive text-4_adaptive">
                        Добавление или удаление категорий</p>
                    <div className="form__series">
                        <ItemInput name='admin-editing-modal-1-input-1'
                                   itemInputTitle='Название'
                                   input='search'/>
                    </div>
                </div>
            </div>
            <div className={style.block_2}>
                <div className="form__series-wrap">
                    <div className="form__series">
                        <ItemInput name='admin-editing-modal-1-input-2'
                                   itemInputTitle='Название категории'/>
                    </div>
                </div>
            </div>
        </form>
    )
};

const ModalReduxForm = reduxForm({form: 'edit-admin-editing-modal-1-event'})(ModalForm);
export default ModalReduxForm;