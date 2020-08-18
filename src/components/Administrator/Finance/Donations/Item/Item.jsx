import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import AvatarBlock from "../../../../Blocks/AvatarBlock/AvatarBlock";

const Item = ({title, type, img_1, img_2, img_3}) => {

	var item = null;

	switch (type) {
		case 'organization':
			item = <div className={style.block_3}>
				<AvatarBlock img={img_2}
				             text_1={'ООО «Праздник»'}
				             text_2={'Организация'}
				             text_2_Class={'text-11 text_grey'}
				             size={'large'}
				             content={'evenly'}
				             link={'/organization'}
				             imgWrapClass_name={'img_wrap_margin_1'}
				/>
			</div>
			break;
		case 'event':
			item =
				<div className={style.block_4}>
					<AvatarBlock img={img_2}
					             text_1={'“Чайная церемония”'}
					             text_2={'Мероприятие'}
					             text_3={'Организация: ООО «Праздник»'}
					             text_2_Class={'text-11 text_grey'}
					             type={'texts'}
					             size={'extraBig'}
					             link={'/activity'}
					             square/>
				</div>
			break;
		default:
			break;
	}

	return (
		<div className={cn(style.item, 'item_1')}>
			<div className={style.block_1}>
				<AvatarBlock img={img_1}
				             text_1={title}
				             text_2={'17.11.1978, 18:28'}
				             text_1_Class='text-7_adaptive'
				             text_2_Class={'text-11 text_grey'}
				             text_3={'mail@mail.com'}
				             size={'large'}
				             type={'texts'}/>
				<div className='flex-column'>
					<p className={cn(style.text_1, "text-16")}>Сумма поддержки: <mark className='text_pink'>1000
						₽</mark></p>
					<p className={cn(style.text_2, "text-16 text_pink flex-left")}>+100 z</p>
				</div>
			</div>
			<div className={style.block_2}>
				{item}
			</div>
		</div>
	)
};

export default Item;