import React, {  } from 'react';


const CheckBoxFilter = ({checkBoxState, setCheckBoxState, checkBoxValues}) => {
   
    const clickCheckBox = (checkBoxState, setCheckBoxState, id) => {
        if (!Array.isArray(checkBoxState)){
            setCheckBoxState(!checkBoxState)
        }else{
            if (checkBoxState.includes(id)){
                setCheckBoxState([...checkBoxState].filter(x=>x!=id))
            }else{
                setCheckBoxState([...checkBoxState, id])
            }            
        }
    };

    return(
        checkBoxValues.map((value, index_box)=>{
            return(
                <div 
                    onClick={()=>clickCheckBox(checkBoxState, setCheckBoxState, value.id)} 
                    className={`catalog-filter__check 
                        ${(Array.isArray(checkBoxState) ? checkBoxState.includes(value.id) : checkBoxState) && "catalog-filter__check_active"} js-checkbox`} 
                    key={index_box}
                >
                    <input type="checkbox" name="" value=""/>
                    <div className="check">
                        <i className="fa-check"></i>
                    </div>
                    <p>{value.name}</p>
                </div>
            )
        })   
    )
}

export default CheckBoxFilter;