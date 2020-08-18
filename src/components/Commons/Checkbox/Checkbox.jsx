import React from 'react';
import {createField, checkboxInput} from "../FormsControls/FormsControls";
import {Required} from "../../../utils/Required";


let Checkbox = ({name, index, numb, title, value, required}) => {

	const requiredItem = Required(required, 'checkbox');

	return <div className='checkbox-wrap'>
		{createField(
			"",
			name,
			[requiredItem],
			checkboxInput,
			null,
			null,
			{
				type: "checkbox",
				id: "checkbox-id-" + numb + "-" + index,
				className: 'checkbox-none',
				numb: numb,
				index: index,
				title: title,
				value: value
			})
		}
	</div>
};

export default Checkbox;