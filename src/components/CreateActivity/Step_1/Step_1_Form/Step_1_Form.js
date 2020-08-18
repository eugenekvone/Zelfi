import React, {useState} from "react";
import {reduxForm} from "redux-form";
import ItemInput from "../../../Commons/ItemInput/ItemInput";
import cn from "classnames";
import Block_14 from "../../../Blocks/PhotoBlock/PhotoBlock";
import TextRedactor from "../../../Commons/TextRedactor/TextRedactor";
import style from './Step_1_Form.module.scss';
import DateReduxForm from "./Date_Form";
import {NavLink} from "react-router-dom";
import DataDate_Form from "./DataDate_Form";
import TitleWrapBlock from "../../../Blocks/TitleWrapBlock/TitleWrapBlock";
import Modal from "../Modal/Modal";


const Step_1_Form = ({handleSubmit,
                     data_dates,
                     addDate,
                     all_organizations,
                     categorys,
                     citys,
                     deleteDate,
                     history,
                     invalid,
                     submitFailed,
                     age_ratings}) => {

    const invalidError = (submitFailed && invalid);

    let dateError = false;

    if (data_dates.length !== 0) {
        dateError = false;
    } else {
        dateError = true;
    }

    let buttonError = () => (
        <button className="btn-1 btn btn_height-1" disabled>
            <p className="text-7 text_white">Далее</p>
        </button>
    );

    let buttonSuccess = () => (
        <button className="btn-1 btn btn_height-1">
            <p className="text-7 text_white">Далее</p>
        </button>
    )

    let [modal, setModal] = useState(false);
    let openModal = () => {setModal(true)};
    let closeModal = () => {setModal(true)};

    return (
        <form onSubmit={handleSubmit} className="flex-column">
            <div className="form__series-wrap form__series-wrap-1 form__series-wrap-2_adaptive">
                <p className="form__series-title form__series-title-1
                text-3 text-4_adaptive form__series-title-1_adaptive">Информация об организаторе</p>
                <div className="form__series form__series-1 form__series-1_adaptive">
                    <ItemInput itemInputTitle='Организатор'
                               name='organizer'
                               required
                               itemInputClass='input-item-1'
                               options={all_organizations}
                               selector_type={'organization'}
                               input='selector'/>
                    <NavLink to='/create_organization' className="btn-2 btn btn_height-1 flex-bottom">
                        <p className="text-7">Добавить организацию</p>
                    </NavLink>
                </div>
            </div>
            <div className="form__series-wrap form__series-wrap-1 form__series-wrap-3_adaptive">
                <p className="form__series-title form__series-title-1 text-3
                text-4_adaptive form__series-title-1_adaptive">Контактные данные</p>
                <div className="form__series form__series-1">
                    <ItemInput itemInputTitle='Телефон'
                               name='contact_phone'
                               input='phone'
                               required/>
                    <ItemInput itemInputTitle='E-mail'
                               name='contact_email'
                               required
                               input='email'/>
                    <ItemInput itemInputTitle='Город организатора'
                               name='contact_city'
                               disabled
                               placeholder='Казань'
                               input='input'/>
                </div>
            </div>
            <div className="form__series-wrap form__series-wrap-1 form__series-wrap-2_adaptive">
                <p className="form__series-title form__series-title-1 text-3
                text-4_adaptive form__series-title-1_adaptive">Общая информация</p>
                <div className="form__series">
                    <ItemInput itemInputTitle='Название' required name='title'/>
                </div>
            </div>
            <div className={style.block_3}>
                <p className={cn(style.text, "text-7")}>Фотографии <span>(не более 5 файлов)</span></p>
                <Block_14/>
            </div>
            <div className="form__series-wrap form__series-wrap-2 form__series-wrap-7_adaptive">
                <div className="form__series form__series_row-gap-1 form__series-4_adaptive">
                    <ItemInput itemInputTitle='Видео (ссылка)' name='video' input='video'/>
                    <div className='input-item'>
                        <p className="input-title text-7">Подробное описание</p>
                        <TextRedactor name='description' required/>
                    </div>
                </div>
            </div>
            <DataDate_Form data_dates={data_dates} deleteDate={deleteDate}/>
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
            <div className={cn(style.btn_2, "btn-2 btn btn_height-1")} onClick={addDate}>
                <p className="text-7">+ Добавить дату</p>
            </div>
            <div className="form__series-wrap form__series-wrap-4 form__series-wrap-3_adaptive">
                <div className="form__series form__series-3 form__series_row-gap-1">
                    <ItemInput itemInputTitle='Категория' name='category'
                               required
                               options={categorys}
                               selector_type={'categorys'}
                               input='selector'/>
                    <ItemInput itemInputTitle='Рейтинг мероприятия' name='ageRating'
                               required
                               options={age_ratings}
                               selector_type={'age_ratings'}
                               input='selector'/>
                    <ItemInput itemInputTitle='Адрес мероприятия' name='address'
                               required
                               openModal={openModal}
                               input='address'/>
                    <ItemInput itemInputTitle='Комментарий к адресу' name='address_description'/>
                </div>
            </div>
            <div className="form__series-wrap">
                <div className="form__series form__series-6 form__series-1_adaptive">
                    <div className="btn-2 btn btn_height-1 order_1_adaptive" onClick={history.goBack}>
                        <p className="text-7">Отменить</p>
                    </div>
                    {invalidError ? buttonError() : buttonSuccess()}
                    {invalidError &&
                        <div className="input-item-5 input-item order_-1_adaptive">
                            <TitleWrapBlock title='Заполните обязательные поля'/>
                        </div>
                    }
                </div>
            </div>
            <Modal isOpen={modal} close={closeModal}/>
        </form>
    )
};

const Step_1_ReduxForm = reduxForm({form: 'create_activity_step_1'})(Step_1_Form);
export default Step_1_ReduxForm;
