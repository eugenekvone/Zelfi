import React from 'react';
import SortingWrapBlock from "../../../../Blocks/SortingWrapBlock/SortingWrapBlock";
import RelevantItem from "../../../MyActivities/Relevant/Item/Item";


const Relevant = ({component, items}) => {

    let Items = () => (
        <div className='inner_1 inner_1_adaptive'>
            {items.map(i => <RelevantItem title={i}/>)}
        </div>
    );

    return (
        <div>
            <SortingWrapBlock component_1={component} component_2={Items} btns/>
        </div>
    )
};

export default Relevant;