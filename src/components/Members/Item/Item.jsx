import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import AvatarBlock from "../../Blocks/AvatarBlock/AvatarBlock";
import img from "../../../assets/img/initialState/Members/img.jpg";

const Item = ({id, confirm}) => {
	return (
		<div className={style.item}>
			<div className={style.inner_1}>
				<div className={style.block_1}>
					<p className='text-7'>{id}</p>
				</div>
				<div className={style.block_2}>
					<div className={style.block_3}>
						<AvatarBlock img={img} text_1='Антон Камолов'
						             text_1_Class='text-7_adaptive'
						             text_2_Class='none_adaptive'
						             text_2='Казань'
						             size='middle'/>
						<div className='flex-ver-center'>
							{confirm ?
								<div className={cn(style.btn, "btn btn-2 btn_height-3 disabled")}>
									<p className="text-20">Участник подтвержден</p>
								</div>
								:
								<div className={cn(style.btn, style.btn_1, "btn btn-1 btn_height-1")}>
									<p className="text-20 text_white text-1_adaptive">Отменить участника вручную</p>
								</div>
							}
						</div>
					</div>
					<div>
						<p className={cn(style.text_1, 'text-11')}>Куплено билетов:</p>
						<p className='text-16 text-5_adaptive'>3 200 ₽</p>
					</div>
					<div>
						<p className={cn(style.text_1, 'text-11')}>E-mail:</p>
						<p className='text-16 text-5_adaptive'>mail@mail.ru</p>
					</div>
					<div>
						<p className={cn(style.text_1, 'text-11')}>Телефон:</p>
						<p className='text-16 text-5_adaptive'>+7 (999) 555-22-22</p>
					</div>
				</div>
			</div>
			<div className={style.inner_2}>
				<div>
					<p className={cn(style.text_1, 'text-11')}>Размер футболки:</p>
					<p className='text-16 text-5_adaptive'>XL</p>
				</div>
				<div>
					<p className={cn(style.text_1, 'text-11')}>Есть ли аллергия на цитрус:</p>
					<p className='text-16 text-5_adaptive'>Да</p>
				</div>
				<div>
					<p className={cn(style.text_1, 'text-11')}>Нужен коврик:</p>
					<p className='text-16 text-5_adaptive'>Нет</p>
				</div>
				<div>
					<p className={cn(style.text_1, 'text-11')}>Размер футболки:</p>
					<p className='text-16 text-5_adaptive'>XS</p>
				</div>
			</div>
		</div>
	)
};

export default Item;