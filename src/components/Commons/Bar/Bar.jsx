import React from 'react';
import Chart from 'react-apexcharts'

const Bar = () => {
	let initialState = {
		series: [
			{
				name: 'Платные',
				data: [129, 128, 154, 129, 128, 128, 128, 154, 129]
			},
			{
				name: 'Бесплатные',
				data: [315, 273, 245, 315, 273, 273, 245, 315, 273]
			}
		],
		options: {
			chart: {
				type: 'bar',
				toolbar: {
					show: false,
				}
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '71%',
					dataLabels: {
						position: 'top',
					},
				},
			},
			dataLabels: {
				enabled: true,
				offsetY: -20,
				style: {
					fontSize: '12px',
					fontFamily: 'Montserrat-Regular',
					colors: ['#000000']
				}
			},
			stroke: {
				show: false,
			},
			tooltip: {
				enabled: false,
			},
			xaxis: {
				categories: ['Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
				labels: {
					style: {
						colors: ['#565656'],
						fontSize: '12px',
						fontFamily: 'Montserrat-Regular',
					}
				},
				axisTicks: {
					show: false
				}
			},
			yaxis: {
				max: 500,
				tickAmount: 5,
				labels: {
					offsetY: 3,
					style: {
						colors: ['#565656'],
						fontSize: '12px',
						fontFamily: 'Montserrat-Regular',
					}
				}
			},
			fill: {
				opacity: 1,
				colors: ['#9B63F8', '#FF2998']
			},
			legend: {
				show: false
			}
		}
	}

	return (
		<Chart options={initialState.options} series={initialState.series} type="bar" height={224}/>
	)
}

export default Bar;