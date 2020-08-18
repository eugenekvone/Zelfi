import React, {useState} from 'react';
import style from './Editing.module.scss';
import EditingReduxForm from "./EditingForm/EditingForm";
import Modal_1 from "./Modals/Modal_1/Modal_1";
import Modal_2 from "./Modals/Modal_2/Modal_2";


const Editing = () => {

    let [modal_1, setModal_1] = useState(false);
    let [modal_2, setModal_2] = useState(false);

    let openModal_1 = () => {setModal_1(true)};
    let openModal_2 = () => {setModal_2(true)};

    let closeModal_1 = () => {setModal_1(false)};
    let closeModal_2 = () => {setModal_2(false)};

    return (
        <div className='case'>
            <div className={style.block}>
                <div className="form__series form__series-8 form__series-1_adaptive">
                    <div className="btn-2 btn btn_height-1" onClick={openModal_1}>
                        <p className="text-7">Добавить или удалить город</p>
                    </div>
                    <div className="btn-1 btn btn_height-1" onClick={openModal_2}>
                        <p className="text-7 text_white">Редактировать категории</p>
                    </div>
                </div>
            </div>
            <EditingReduxForm/>
            <Modal_1 isOpen={modal_1} close={closeModal_1}/>
            <Modal_2 isOpen={modal_2} close={closeModal_2}/>
        </div>
    )
};

export default Editing;