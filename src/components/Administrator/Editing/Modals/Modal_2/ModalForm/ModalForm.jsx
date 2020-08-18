import React from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../../../Commons/ItemInput/ItemInput";
import style from './ModalForm.module.scss';
import Item from "./Item/Item";


const ModalForm = ({handleSubmit}) => {

    let initialState = {
        items: [
            {title: 'A', active: true},
            {title: 'Б', active: false},
            {title: 'В', active: false},
            {title: 'Г', active: false},
            {title: 'Д', active: false},
            {title: 'Е', active: false},
            {title: 'Ж', active: false},
            {title: 'З', active: false},
            {title: 'И', active: false},
            {title: 'К', active: false},
            {title: 'Л', active: false},
            {title: 'М', active: false},
            {title: 'Н', active: false},
            {title: 'О', active: false},
            {title: 'П', active: false},
            {title: 'Р', active: false},
            {title: 'С', active: false},
            {title: 'Т', active: false},
            {title: 'У', active: false},
            {title: 'Ф', active: false},
            {title: 'Х', active: false},
            {title: 'Ц', active: false},
            {title: 'Ч', active: false},
            {title: 'Ш', active: false},
            {title: 'Щ', active: false},
            {title: 'Э', active: false},
            {title: 'Ю', active: false},
            {title: 'Я', active: false},
        ],
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={style.block_1}>
                <div className="form__series-wrap form__series-wrap-8">
                    <p className="form__series-title form__series-title-1 text-3
                    text-4_adaptive form__series-title-1_adaptive">
                        Добавление или удаление категорий</p>
                    <div className={style.block_2}>
                        {initialState.items.map(i => <Item title={i.title} active={i.active}/>)}
                    </div>
                </div>
                <div className="form__series-wrap">
                    <div className="form__series">
                        <ItemInput name='admin-editing-modal-2-input-1'
                                   itemInputTitle='Название'
                                   input='search'/>
                    </div>
                </div>
            </div>
        </form>
    )
};

const ModalReduxForm = reduxForm({form: 'edit-admin-editing-modal-2-event'})(ModalForm);
export default ModalReduxForm;