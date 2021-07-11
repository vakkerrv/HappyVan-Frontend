import React, {  } from 'react';
import { withRouter } from 'react-router-dom';

import SlideToggle from "react-slide-toggle";

const ListSelectionFilter = ({history, selectedFilterTags, mobile}) => {
    // console.log('selectedFilterTags', selectedFilterTags)
    // console.log('dropdown', dropdown)
    // const mobile = true

    let keyword = history.location.search
    let urlParams = new URLSearchParams(keyword)

    const tag = (key, value, id) => 
        <div className="catalog-tag_item" key={id?(key+id):key}>
            <p>{value}</p>
            <i className="fa-close" onClick={()=>dropFilter(key, id)}></i>
        </div>

    const updateCatalog = (update) => {
        update.map(filterToDrop => {
            urlParams.set(Object.keys(filterToDrop)[0], Object.values(filterToDrop)[0])
        })

        history.push({
            pathname: '/catalog',
            search: urlParams.toString()
        })
    }

    const dropFilter = (key, id) => {
        if(key==='inStock'){
            updateCatalog([{inStock: ''}])
        }else if(key==='price'){
            updateCatalog([{priceFrom: ''}, {priceTo: ''}])
        }else {//(key==='categories')
            let currentSearch = urlParams.get(key).split('%%')
            let update = {}
            update[key] = currentSearch.filter(x=>x!=id).join('%%')
            updateCatalog([update])
        }
    }

    const renderTags = 
        selectedFilterTags.map(filter=>
            Array.isArray(filter.value) 
                ? filter.value.map(x=>tag(filter.key, x.name, x.id))
                : filter.value&&tag(filter.key, filter.value)
        )
    // console.log()

    return(
        <SlideToggle collapsed = {mobile} bestPerformance={true}>
            {({ toggle, toggleState, setCollapsibleElement }) => (
                <div className="catalog-filter__selection-list">
                    {/*<div onClick={mobile && toggle} className="catalog-filter__selection-info">*/}
                        <p onClick={mobile && toggle} className={`catalog-filter__selection-title ${(toggleState==='EXPANDED' || toggleState==='EXPANDING') && "catalog-filter__item_active"}`}>
                            Выбранные фильтры ({renderTags.flat().filter(x=>x).length})
                            <i className="catalog-filter__item-icon fa-arrow-next"></i>
                        </p>
                    {/*</div>*/}
                    <div ref={setCollapsibleElement}>
                        {renderTags.flat().filter(x=>x).length >0 && <div className="catalog-filter__selection-tags">
                            {renderTags}
                        </div>}
                    </div>
                </div>
            )}
        </SlideToggle>
    )
}

export default withRouter(ListSelectionFilter);