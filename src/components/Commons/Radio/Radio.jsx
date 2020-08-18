import React from 'react';
import {createField, radioInput_1, radioInput_2, radioInput_3, radioInput_4} from "../FormsControls/FormsControls";


let Radio = ({name, items, radio}) => {

	var input = radioInput_1;
	var radioItemClass = 'radio_1-item';
	var radioWrapClass = 'radio-wrap_1';

	switch (radio) {
		case 1:
			radioItemClass = 'radio_1-item';
			input = radioInput_1;
			break;
		case 2:
			radioItemClass = 'radio_2-item';
			input = radioInput_2;
			break;
		case 3:
			radioItemClass = 'radio_2-item';
			radioWrapClass = 'radio-wrap_2';
			input = radioInput_3;
			break;
		case 4:
			radioItemClass = 'radio_3-item';
			radioWrapClass = 'radio-wrap_3';
			input = radioInput_4;
			break;
		default:
			break;
	}

	return (
		<div className={radioWrapClass}>
			{items.map(i =>
				<div className={radioItemClass}>
					{createField(
						"",
						name,
						[],
						input,
						{
							type: "radio",
							id: "radio-id-" + i.numb + "-" + i.index,
							className: 'radio-none',
							numb: i.numb,
							index: i.index,
							title: i.title,
							text: i.text,
							price: i.price,
							value: i.index,
						})
					}
				</div>
			)}
		</div>
	)
};

export default Radio;