import React, {  } from 'react';

import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceFilter = ({PriceRangeFrom, setPriceRangeFrom, PriceRangeTo, setPriceRangeTo}) => {
    const maxPriceForFilter = 1000

    const SetPriceRange = (data) => {
        setPriceRangeFrom(data[0])
        setPriceRangeTo(data[1])
    };

    // Functions to manage user's input of price range 
    const HandleTextPriceFrom = (e) => {
        let value_from = e.target.value   
        // validate
        if ((!isNaN(value_from)) && (value_from>=0)){
            if (value_from >= PriceRangeTo) {
               setPriceRangeFrom(PriceRangeTo)
            } else {
                setPriceRangeFrom(value_from)
            }
        }
    };

    const HandleTextPriceTo = (e) => {
        let value_to = e.target.value   
        // validate
        if (!isNaN(value_to)){
            if (value_to <= PriceRangeFrom) {
                setPriceRangeTo(PriceRangeFrom)
            } else {
                setPriceRangeTo(value_to)
            }
        } else{
            setPriceRangeTo(maxPriceForFilter)
        }
    };

    return(
        <div className="catalog-filter__range">
            <div className="catalog-filter__range-input">
                <p>От</p>
                <input 
                    value={PriceRangeFrom} 
                    type="text" 
                    name="from" 
                    className="catalog-filter__range-from" 
                    onChange={(e)=>setPriceRangeFrom(e.target.value)} 
                    onBlur={HandleTextPriceFrom}
                />
                <p>До</p>

                <input 
                    value={(PriceRangeTo>=maxPriceForFilter ? `${maxPriceForFilter}+` : PriceRangeTo)} 
                    type="text" 
                    name="to" 
                    className="catalog-filter__range-to" 
                    onChange={(e)=>setPriceRangeTo(e.target.value)} 
                    onBlur={HandleTextPriceTo}
                />
            </div>

            <Range
                value = {[PriceRangeFrom, PriceRangeTo]}
                min = {0}
                max = {maxPriceForFilter}
                allowCross = {false}
                onChange = {SetPriceRange}
                handleStyle = {{}}
            />
        </div>
    )
}

export default PriceFilter;