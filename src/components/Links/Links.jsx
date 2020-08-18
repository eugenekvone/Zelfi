import React from 'react';
import icon_1 from "../../assets/img/Control/icon_1.svg";
import icon_1_active from "../../assets/img/Control/icon_1_active.svg";
import icon_2 from "../../assets/img/Control/icon_2.svg";
import icon_2_active from "../../assets/img/Control/icon_2_active.svg";
import icon_3 from "../../assets/img/Control/icon_3.svg";
import icon_3_active from "../../assets/img/Control/icon_3_active.svg";
import icon_1_profile from "../../assets/img/Profile/icon_1.svg";
import icon_1_active_profile from "../../assets/img/Profile/icon_1_active.svg";
import icon_2_profile from "../../assets/img/Profile/icon_2.svg";
import icon_2_active_profile from "../../assets/img/Profile/icon_2_active.svg";
import icon_3_profile from "../../assets/img/Profile/icon_3.svg";
import icon_3_active_profile from "../../assets/img/Profile/icon_3_active.svg";

export const links = [
	{
		mainLink: '/control',
		mainNav: [
			{
				icon: icon_1,
				icon_active: icon_1_active,
				title: "Мои мероприятия",
				url: 'my_activities'
			},
			{
				icon: icon_2,
				icon_active: icon_2_active,
				title: "Мои организации",
				url: 'my_organizations'
			},
			{
				icon: icon_3,
				icon_active: icon_3_active,
				title: "Вывод средств",
				url: 'output_means'
			}
		],
		nav: {
			link_1: [
				{
					title: 'Актуальные',
					url: 'relevant',
					number: 12
				},
				{
					title: 'Прошедшие',
					url: 'past',
					number: 23
				},
				{
					title: 'На модерации',
					url: 'on_modernization',
					number: 12
				},
			],
			link_2: [
				{
					title: 'Для юридических лиц',
					url: 'legal'
				},
				{
					title: 'Для физических лиц',
					url: 'individ'
				},
			]
		}
	},
	{
		mainLink: '/profile',
		mainNav: [
			{
				icon: icon_1_profile,
				icon_active: icon_1_active_profile,
				title: "Профиль",
				url: 'main'
			},
			{
				icon: icon_2_profile,
				icon_active: icon_2_active_profile,
				title: "Мои билеты",
				quantity: 27,
				url: 'my_tickets'
			},
			{
				icon: icon_3_profile,
				icon_active: icon_3_active_profile,
				title: "Закладки",
				quantity: 91,
				url: 'bookmarks'
			}
		],
		nav: {
			bookmarks: [
				{
					title: 'Мероприятия',
					url: 'events'
				},
				{
					title: 'Организации',
					url: 'organizations'
				},
			],
			my_tickets: [
				{
					title: 'Актуальные',
					url: 'relevant'
				},
				{
					title: 'Архив билетов',
					url: 'archive'
				},
			],
		},
	},
	{
		mainLink: '/administrator',
		mainNav: [
			{
				title: "Статистика",
				url: 'statistics'
			},
			{
				title: "Финансы",
				url: 'finance'
			},
			{
				title: "Модерация",
				quantity: 17,
				url: 'moderation'
			},
			{
				title: "Редактирование",
				url: 'editing'
			},
			{
				title: "Рассылка",
				url: 'newsletter'
			}
		],
	},
	{
		mainLink: '/create_event',
		mainNav: ['step_1', 'step_2', 'requisites', 'step_3', 'step_4'],
	},
	{
		mainLink: '/create_organization',
		mainNav: ['info', 'success']
	},
	{
		mainLink: '/notifications',
		nav: [
			{
				title: 'Все',
				quantity: 31,
				url: 'all',
			},
			{
				title: 'Баллы',
				quantity: 1,
				url: 'points'
			},
		],
	},
	{
		mainLink: '/registration',
		nav: ['/send', '/password', '/success'],
	},
	{
		mainLink: '/recovery',
		nav: ['/send', '/password', '/success'],
	},
	'/activity',
	'/activity_completed',
	'/activity_organizer',
	'/about',
	'/partners',
	'/members',
	'/buy',
	'/organization',
	'/contacts',
	'/rating',
	'/login'
]
