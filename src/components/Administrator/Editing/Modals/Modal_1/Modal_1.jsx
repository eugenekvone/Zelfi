import React from 'react';
import cn from "classnames";
import ModalItem from "react-modal";
import style from './Modal_1.module.scss';
import ModalReduxForm from "./ModalForm/ModalForm";
import Items from "../Items/Items";


const Modal_1 = ({isOpen, close}) => {
    return (
        <ModalItem
            isOpen={isOpen}
            contentLabel="onRequestClose Example"
            className={cn(style.modal, 'modal-3 modal')}
            overlayClassName="overlay">
            <ModalReduxForm/>
            <div className={style.block_4}>
                <div className={style.block_1}>
                    <div className="btn-2 btn btn_height-1">
                        <p className="text-7">Очистить поле</p>
                    </div>
                    <div className="btn-1 btn btn_height-1 order_-1_adaptive">
                        <p className="text-7 text_white">Добавить</p>
                    </div>
                </div>
                <div className={style.block_3}>
                    <Items/>
                </div>
            </div>
            <div className={style.block_2}>
                <div className="btn-2 btn btn_height-1" onClick={close}>
                    <p className="text-7">Отменить</p>
                </div>
                <div className="btn-1 btn btn_height-1 order_-1_adaptive">
                    <p className="text-7 text_white">Отправить</p>
                </div>
            </div>
        </ModalItem>
    )
};

export default Modal_1;