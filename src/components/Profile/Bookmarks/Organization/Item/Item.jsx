import React from 'react';
import style from './Item.module.scss';
import cn from "classnames";
import AvatarBlock from "../../../../Blocks/AvatarBlock/AvatarBlock";
import img_1 from "../../../../../assets/img/initialState/Profile/img_1.jpg";
import Info from "../../../../Commons/Info/Info";
import Bookmark from "../../../../Commons/Bookmark/Bookmark";
import {NavLink} from "react-router-dom";


const Item = ({title}) => {
	return (
		<div className={cn(style.block_3, 'item_1')}>
			<div className="flex-column">
				<div className={style.item_3}>
					<AvatarBlock rating={4}
					             type={'rating'}
					             text_1={title}
					             text_1_Class={'text-3 text-1_adaptive'}
					             size={'large'}
					             img={img_1}
					             ratingSize={'middle'}
					             link={'/organization'}/>
				</div>
				<NavLink to='/organization' className={cn("btn btn-2 btn_height-1", style.btn_3)}>
					<p className={cn(style.text_1, "text-21 text_pink")}>23</p>
					<p className="text-1">актуальных <br></br>мероприятия</p>
				</NavLink>
			</div>
			<div className={style.block_3__inner}>
				<div className={style.item_4}>
					<div className={style.item_5}>
						<Info item='phone' text={'+7 (999) 888-77-66'} opacity/>
					</div>
					<div className={style.item_5}>
						<Info item='mail' text={'example@mail.com'} opacity/>
					</div>
					<div className="flex-right click_reaction flex-left_adaptive">
						<Bookmark/>
					</div>
				</div>
				<p className="text-22">Олимпиада проводится для студентов 3 и 4 курсов
					направления «Экономика» и специальности «Экономическая безопасность» и
					предполагает решение тестовых и практических ситуационных заданий разного
					уровня сложности по дисциплинам «Бухгалтерский учет и анализ»,
					«Бухгалтерский финансовый учет», «Бухгалтерская финансовая отчетность»,
					«Комплексный экономический анализ хозяйственной деятельности», «Анализ
					финансовой отчетности», «Аудит». К участию приглашается от вуза одна или две
					команды (отдельно 3 и 4 курсов) в количестве от 3 до 5 человек каждая с
					руководителем.</p>
			</div>
		</div>
	)
};

export default Item;