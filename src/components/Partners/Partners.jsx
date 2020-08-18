import React from 'react';
import style from './Partners.module.scss';
import Title from "../Commons/Title/Title";
import Points from "../Commons/Points/Points";
import Numbers from "../Commons/Numbers/Numbers";
import ItemWrapBlock from "../Blocks/ItemWrapBlock/ItemWrapBlock";


const Partners = () => {

	let initialState = {
		points: [
			'За два часа ваш ребенок:',
			'Превратит продукты питания в пищу для ума',
			'Узнает о составе еды, её физических и химических свойствах',
			'Освоит технологии производства мороженого и научной варки яиц',
			'Синтезирует парочку “Е” и узнает, вредно ли это для здоровья'
		],
		numbers: [
			'За два часа ваш ребенок:',
			'Превратит продукты питания в пищу для ума',
			'Узнает о составе еды, её физических и химических свойствах',
			'Освоит технологии производства мороженого и научной варки яиц',
			'Синтезирует парочку “Е” и узнает, вредно ли это для здоровья'
		],
		items: [
			'Как зарегистрировать мероприятие?',
			'Как прийти на мероприятие?',
			'Как создать аккаунт?',
		]
	};

	return (
		<div className='content container'>
			<Title title='Партнерам'/>
			<div className="case case_1">
				<p className="text-14 text_1 text-3_adaptive">В компании физиков, химиков и биологов, ребята проведут
					серию экспериментов над привычными продуктами питания. Чуть больше чем за два часа узнаем из чего
					состоит еда, разберем ее на компоненты и соберем обратно в изысканное блюдо для наших ведущих.</p>
				<div className="block_4">
					<Points items={initialState.points}/>
				</div>
				<div className={style.block}>
					<div className={style.item}>
						<p className="text-26">10%</p>
					</div>
					<div>
						<p className="title_1 text-21 text-5_adaptive">Что входит в комиссию:</p>
						<Numbers items={initialState.numbers}/>
					</div>
				</div>
				<p className="title_1 text-21">Зачем нужен «Zelfi»</p>
				<p className="text-14 text_2 text-3_adaptive">
					В лаборатории жгучих перцев соберём собственные аппараты для экстракции. Узнаем, чем на самом деле
					пахнет мята, почему красный перец такой жгучий и получим привычные для кухни запахи лабораторным
					способом.
					<br></br><br></br>
					В лаборатории вареных яиц c помощью физико-химических методов вычислим идеальное время для варки
					куриного яйца. Отделим желток от белка, проведем качественное сравнение составов и узнаем все о
					стоимости выеденного яйца.
					<br></br><br></br>
					В лаборатории консервированных ананасов познакомимся с тушенкой и разберемся в методах сохранения
					продуктов. Законсервируем парочку ананасов четырьмя разными способами и заберем все это домой, чтобы
					выяснить, какой метод консервации лучше.
				</p>
				<p className="title_1 text-21">FAQ</p>
				<ItemWrapBlock items={initialState.items}/>
			</div>
		</div>
	)
};

export default Partners;