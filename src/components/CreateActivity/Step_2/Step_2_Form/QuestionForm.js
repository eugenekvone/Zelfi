import React, {useState} from 'react';
import {reduxForm} from "redux-form";
import ItemInput from "../../../Commons/ItemInput/ItemInput";
import TitleWrapBlock from "../../../Blocks/TitleWrapBlock/TitleWrapBlock";
import style from "./QuestionForm.module.scss";


const QuestionForm = (props) => {

    let [question, setQuestion] = useState(false);

    const {handleSubmit, submitFailed, submitSucceeded, invalid, reset} = props

    const error = (submitFailed && invalid);

    if (submitSucceeded) reset(true);

    let openQuestion = () => setQuestion(true);
    let closeQuestion = () => setQuestion(false);

    return (
        <form onSubmit={handleSubmit}>
            {question &&
                <div className={style.block_1}>
                    <div className="form__series-wrap form__series-wrap-5">
                        <div className="form__series form__series-1">
                            <ItemInput itemInputTitle='Текст вопроса'
                                       required
                                       name='title'/>
                            <ItemInput itemInputTitle='Комментарий к вопросу'
                                       required
                                       name='description'
                                       itemInputClass='input-item-1'/>
                        </div>
                    </div>
                    <div className="form__series form__series-4 form__series-1_adaptive">
                        <div className="btn-2 btn btn_height-1" onClick={closeQuestion}>
                            <p className="text-7">Отменить</p>
                        </div>
                        <button className="btn-1 btn btn_height-1 order_-1_adaptive">
                            <p className="text-7 text_white">Добавить</p>
                        </button>
                    </div>
                </div>
            }
            <div className="form__series-wrap form__series-wrap-2">
                <div className="form__series form__series-1 form__series-3_adaptive">
                    <div className="btn-1 btn btn_height-1" onClick={openQuestion}>
                        <p className="text-7 text_white">Добавить вопрос</p>
                    </div>
                    {error &&
                        <div className='order_-1_adaptive'>
                            <TitleWrapBlock title='Завершите создание вопроса'/>
                        </div>
                    }
                </div>
            </div>
        </form>
    )
};

const QuestionReduxForm = reduxForm({form: 'create_activity_question'})(QuestionForm);
export default QuestionReduxForm;
