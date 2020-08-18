import React, {useState} from 'react';
import style from './PhotoBlock.module.scss';
import img from "../../../assets/img/Blocks/Block_14/img.jpg";
import icon from "../../../assets/img/Blocks/Block_14/icon.svg";
import cn from "classnames";
import BtnClose from "../../Commons/Btns/BtnClose/BtnClose";
import Modal from "./Modal/Modal";
import {connect} from "react-redux";
import {
	saveMainImg_Block_14, saveOtherImg_Block_14, setMainImg_Block_14, setMainImgFile_Block_14
} from "../../../redux/reducers/blocks-reducer";


const PhotoBlock = (props) => {

	let [modal, setModal] = useState(false);

	let closeModal = () => {
		setModal(false)
	};

	const onOtherImgSelected = (e) => {
		if (e.target.files.length) {
			props.saveOtherImg(e.target.files[0]);
		}
	};

	const onMainImgSelected = (e) => {
		if (e.target.files.length) {
			props.saveMainImg(e.target.files[0]);
		}
	};

	const delMainImg = () => {
		props.delMainImg();
		props.delMainImgFile()
	}

	return (
		<div>
			{!props.minimal ?
				<div className={style.block}>
					{props.main_img[0] ?
						<div className={style.item_wrap}>
							<div className={cn(style.item, style.item_1)}>
								<div className={style.img_wrap}>
									<img src={props.main_img} alt="img" className={style.img}/>
								</div>
								<BtnClose close={delMainImg}/>
							</div>
							<p className={cn(style.text, 'text-25')}>Главная фотография (обложка мероприятия)</p>
						</div>
						:
						<div className={style.item_wrap}>
							<input type='file' className={style.file_input} onChange={onMainImgSelected}
							       id='mainImgFile'/>
							<label className={style.item_wrap} htmlFor='mainImgFile'>
								<div className={cn(style.item, style.item_2)}>
									<div className={style.img_wrap}>
										<img src={icon} alt="icon"/>
									</div>
								</div>
								<p className={cn(style.text, 'text-25')}>Главная фотография (обложка мероприятия)</p>
							</label>
						</div>
					}
					{props.other_img.map(img =>
						<div className={style.item_wrap}>
							<div className={cn(style.item, style.item_3)}>
								<div className={style.img_wrap}>
									<img src={img} alt="icon" className={style.img}/>
								</div>
							</div>
						</div>
					)
					}
					<div className={style.block}>
						<input type='file' className={style.file_input} onChange={onOtherImgSelected}
						       id='otherImgFile'/>
						<label className={style.item_wrap} onClick={props.btnModal} htmlFor='otherImgFile'>
							<div className={cn(style.item, style.item_2)}>
								<div className={style.img_wrap}>
									<img src={icon} alt="icon"/>
								</div>
							</div>
						</label>
					</div>
				</div>
				:
				props.main_img[0] ?
					<div className={style.item_wrap}>
						<div className={cn(style.item, style.item_1)}>
							<div className={style.img_wrap}>
								<img src={props.main_img} alt="img" className={style.img}/>
							</div>
							<BtnClose close={delMainImg}/>
						</div>
					</div>
					:
					<div className={style.item_wrap}>
						<input type='file' className={style.file_input} onChange={onMainImgSelected} id='mainImgFile'/>
						<label className={style.item_wrap} htmlFor='mainImgFile'>
							<div className={cn(style.item, style.item_2)}>
								<div className={style.img_wrap}>
									<img src={icon} alt="icon"/>
								</div>
							</div>
						</label>
					</div>
			}
			<Modal isOpen={modal} close={closeModal}/>
		</div>
	)
};

let mapStateToProps = (state) => ({
	main_img: state.blocks.block_14.main_img,
	other_img: state.blocks.block_14.other_img,
});

let mapDispatchToProps = (dispatch) => {
	return {
		saveOtherImg: (img) => {
			dispatch(saveOtherImg_Block_14(img))
		},
		saveMainImg: (img) => {
			dispatch(saveMainImg_Block_14(img))
		},
		delMainImg: () => {
			dispatch(setMainImg_Block_14(false))
		},
		delMainImgFile: () => {
			dispatch(setMainImgFile_Block_14(false))
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoBlock);