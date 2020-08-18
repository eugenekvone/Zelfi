import React from 'react';
import style from './Main.module.scss';
import cn from "classnames";
import Block_14 from "../../Blocks/PhotoBlock/PhotoBlock";
import MainReduxForm from "./MainForm/MainForm";
import {NumbFormat} from "../../../utils/NumbFormat";


const Main = () => {
	return (
		<div className='case'>
			<div className="flex flex-column_adaptive">
				<div>
					<p className={cn('text-3 text-4_adaptive', style.text)}>Информация об участнике</p>
					<div className={style.block_1}>
						<Block_14 minimal/>
					</div>
				</div>
				<div className={style.block_2}>
					<div className={style.block_3}>
						<p className="text-19 text_pink text_center relative">{NumbFormat(2657)}
							<div className={style.block_4}>
								<p className="text-16">i</p>
								<p className={cn(style.block_5, "text-1")}>Текст подсказки</p>
							</div>
						</p>
						<p className="text-7 text_center">баллов</p>
					</div>
					<div className={style.block_3}>
						<p className="text-19 text_pink text_center relative">{NumbFormat(51)}
							<div className={style.block_4}>
								<p className="text-16">i</p>
								<p className={cn(style.block_5, "text-1")}>Текст подсказки</p>
							</div>
						</p>
						<p className="text-7 text_center">место</p>
					</div>
				</div>
			</div>
			<MainReduxForm/>
		</div>
	)
};

export default Main;