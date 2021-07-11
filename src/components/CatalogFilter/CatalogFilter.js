import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import api from "../../api";

import SlideToggle from "react-slide-toggle";

import ListSelectionFilter from './ListSelectionFilter'
import PriceFilter from './PriceFilter'
import CheckBoxFilter from './CheckBoxFilter'

const CatalogFilter = ({history, state, handleFilterMob, getProductList, dropFilters, setDropFilters}) => {
    const { innerWidth: width } = window;
    const maxPriceForFilter = 1000

    let keyword = history.location.search
    let urlParams = new URLSearchParams(keyword)

    const [categories, setCategories] = useState([]);
    const [skills, setSkills] = useState([]);
    const [brands, setBrands] = useState([]);

    // States for all checkbox in filters
    const [checkBoxInStock, setCheckBoxInStock] = useState(false);
    const [checkBoxCategory, setCheckBoxCategory] = useState();
    const [checkBoxSkill, setCheckBoxSkill] = useState();
    const [checkBoxBrand, setCheckBoxBrand] = useState();
    const [filterValuesLoaded, setFilterValuesLoaded] = useState(false);

    // State for price range
    const [PriceRangeFrom, setPriceRangeFrom] = useState(0);
    const [PriceRangeTo, setPriceRangeTo] = useState(maxPriceForFilter);

    // selectedFilterTags
    const [selectedFilterTags, setSelectedFilterTags] = useState([])


    // const getFilterValues = async () => {
    //     try {
    //         const response_categories = await api.get('/items/categories/')
    //         const response_skills = await api.get('/items/skills/')
    //         const response_brands = await api.get('/items/brands/')

    //         setCategories(response_categories.data)
    //         setSkills(response_skills.data)
    //         setBrands(response_brands.data)
    //         setFilterValuesLoaded(true)

    //     } catch (error) {
    //         setCategories([])
    //         setSkills([])
    //         setBrands([])
    //     }
    // }

    const getFilterValues = async () => {
        const response_categories = await api.get('/items/categories/')
        const response_skills = await api.get('/items/skills/')
        const response_brands = await api.get('/items/brands/')
        return([response_categories, response_skills, response_brands])
    }

    useEffect(() => {
        let mounted = true;
        getFilterValues().then(response => {
            setCategories(response[0].data)
            setSkills(response[1].data)
            setBrands(response[2].data)
            setFilterValuesLoaded(true)
                }
            )
        return () => mounted = false;
    }, [])

    useEffect(() => {
        urlParams = new URLSearchParams(keyword)

        let historyCategoriesIds = urlParams.get('category') ? urlParams.get('category').split('%%') : []
        let historySkillsIds = urlParams.get('skill') ? urlParams.get('skill').split('%%') : []
        let historyBrandsIds = urlParams.get('brand') ? urlParams.get('brand').split('%%') : []
        let historyPriceFrom = urlParams.get('priceFrom') ? parseInt(urlParams.get('priceFrom'), 10) : undefined
        let historyPriceTo = urlParams.get('priceTo') ? parseInt(urlParams.get('priceTo'), 10) : undefined
        let historyInStock = urlParams.get('inStock') && urlParams.get('inStock')==='true'

        // Update filter states
        setCheckBoxInStock(historyInStock)
        setPriceRangeFrom(historyPriceFrom ? historyPriceFrom : 0)
        setPriceRangeTo(historyPriceTo ? historyPriceTo : maxPriceForFilter)

        // let newCheckBoxCategoryState = categories.map((x)=>{ return( historyCategoriesIds.includes(x.id.toString()) ? true : false )})
        // setCheckBoxCategory(newCheckBoxCategoryState)
        setCheckBoxCategory(categories.filter( x => historyCategoriesIds.includes( x.id.toString() ) ).map(x=>x.id))
        setCheckBoxSkill(skills.filter( x => historySkillsIds.includes( x.id.toString() ) ).map(x=>x.id))
        setCheckBoxBrand(brands.filter( x => historyBrandsIds.includes( x.id.toString() ) ).map(x=>x.id))

        // Update selected filter states
        setSelectedFilterTags(
            [
                {key: 'inStock', value: historyInStock?"Только в наличии":""},
                {key: 'category', value: categories.filter(x => historyCategoriesIds.includes(x.id.toString()))},
                {key: 'skill', value: skills.filter(x => historySkillsIds.includes(x.id.toString()))},
                {key: 'brand', value: brands.filter(x => historyBrandsIds.includes(x.id.toString()))},
                {
                    key: 'price', 
                    value: (historyPriceFrom>0 || (historyPriceTo && historyPriceTo!=null && historyPriceTo<maxPriceForFilter)) && 
                        `${historyPriceFrom==null?0:historyPriceFrom}-${historyPriceTo==null?maxPriceForFilter+'+':historyPriceTo} токенов`
                }
            ])
    }, [keyword, categories, skills, brands])



    // List of all filter and their parameters
    const listFilters = [
        {
            name: 'inStock', 
            title: 'В наличии', 
            checkBoxState: checkBoxInStock, 
            setCheckBoxState: setCheckBoxInStock, 
            type: 'toggle', 
            filterValues: [{id: 0, name:'Только в наличии'}]
        },
        {
            name: 'price', 
            title: 'Tокены', 
            checkBoxState: [], 
            setCheckBoxState: null, 
            type: 'price', 
            filterValues: []},
        {
            name: 'category', 
            title: 'Категории', 
            checkBoxState: checkBoxCategory, 
            setCheckBoxState: setCheckBoxCategory, 
            type: 'checkbox', 
            filterValues: categories
        },
        {
            name: 'skill', 
            title: 'Навыки', 
            checkBoxState: checkBoxSkill, 
            setCheckBoxState: setCheckBoxSkill, 
            type: 'checkbox', 
            filterValues: skills
        },
        {
            name: 'brand', 
            title: 'Бренды', 
            checkBoxState: checkBoxBrand, 
            setCheckBoxState: setCheckBoxBrand, 
            type: 'checkbox', 
            filterValues: brands
        },
    ]


    // Parameters for fading filter list in the mobile version 
    const duration = 500;
    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 1,
    }
    const transitionStyles = {
        entering: { opacity: 0 },
        entered:  { display: 0 },
        exiting:  { opacity: 1 },
        exited:  { opacity: 1 },
    };

    const submitHandler = (e) => {
        e.preventDefault()
        // const selectedCategories = categories.filter((x, index) => {return(checkBoxCategory[index])})
        // const selectedCategoriesIds = selectedCategories.map(x=>x.id)

        urlParams.set('inStock', checkBoxInStock)
        urlParams.set('priceFrom', PriceRangeFrom>0?PriceRangeFrom:'')
        urlParams.set('priceTo', (PriceRangeTo<maxPriceForFilter)?PriceRangeTo:'')
        urlParams.set('category', checkBoxCategory.join('%%'))
        urlParams.set('skill', checkBoxSkill.join('%%'))
        urlParams.set('brand', checkBoxBrand.join('%%'))
        // console.log(urlParams.toString())

        history.push({
            pathname: `/catalog/`,
            search: urlParams.toString(),
        })
        handleFilterMob()
    } 


    // console.log('checkBoxInStock', checkBoxInStock)
    // console.log('PriceRangeTo', PriceRangeTo)

    return (
        <form onSubmit={submitHandler} className="catalog-filter" style={{
            ...defaultStyle,
            ...transitionStyles[state]
        }}>
            <div className="catalog-filter__show">

                {
                    (width>700) 
                    ? (
                        <SlideToggle collapsed = {false} bestPerformance={true}>
                            {({ toggle, toggleState, setCollapsibleElement }) => (
                            <div className="catalog-filter__show-selection">
                                <p 
                                    className={`catalog-filter__item-title ${(toggleState==='EXPANDED' || toggleState==='EXPANDING') && "catalog-filter__item_active"}`}
                                    onClick={toggle}
                                >
                                    Фильтры
                                    <i className="catalog-filter__item-icon fa-arrow-next" style={{"color":"#fff"}}></i>
                                </p>
                                <div ref={setCollapsibleElement}>
                                    {filterValuesLoaded && <ListSelectionFilter 
                                        selectedFilterTags={selectedFilterTags}
                                    />}
                                </div>
                            </div>)}
                        </SlideToggle>
                        ) 
                    : (
                        <Fragment>
                                <p className="catalog-filter__item-title" onClick={handleFilterMob}>
                                    <i className="catalog-filter__show-icon fa-arrow-next" style={{"color":"#fff"}}></i>
                                    Вернуться к каталогу
                                </p>
                            <ListSelectionFilter 
                                selectedFilterTags={selectedFilterTags}
                                mobile
                            />
                        </Fragment>
                        )
                }
                
            </div>

            {listFilters.map((listValue, index_filter)=>{
                return(
                    <SlideToggle collapsed = {true} bestPerformance={true} key={index_filter}>
                        {({ toggle, toggleState, setCollapsibleElement }) => (
                        <div className="catalog-filter__item">
                            <p 
                                className={`catalog-filter__item-title ${(toggleState==='EXPANDED' || toggleState==='EXPANDING') && "catalog-filter__item_active"}`} 
                                onClick={toggle}
                            >
                                {listValue.title}
                                <i className="catalog-filter__item-icon fa-arrow-next"></i>
                            </p>
                            <div ref={setCollapsibleElement}>
                                <div className="catalog-filter__list-check">
                                    {listValue.type!=='price' ? ((listValue.filterValues.length>0) && 
                                        <CheckBoxFilter 
                                            checkBoxState={listValue.checkBoxState} 
                                            setCheckBoxState={listValue.setCheckBoxState} 
                                            checkBoxValues={listValue.filterValues}
                                        />) : 
                                        <PriceFilter 
                                            PriceRangeFrom={PriceRangeFrom} 
                                            setPriceRangeFrom={setPriceRangeFrom} 
                                            PriceRangeTo={PriceRangeTo} 
                                            setPriceRangeTo={setPriceRangeTo}
                                        /> 
                                    }
                                </div>
                            </div>
                        </div>)}
                    </SlideToggle>
                )
            })}
              
            <label className="catalog-filter_sub">
                <input type="submit"/>Применить
            </label>
        </form>
        
    );
};

export default withRouter(CatalogFilter);
