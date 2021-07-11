import React, { useEffect, useState, useRef, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import SlideToggle from "react-slide-toggle";
import { Transition } from 'react-transition-group';
// import Slider from "react-slick";

// import { PRODUCT_LIST_RESET } from '../../constants/productConstants'
// import Product from '../../components/Product'
import { fetchWishlist } from '../../actions/wishlistActions'

import ProductLoader from '../../skeletons/ProductLoader'
import CatalogItem from '../../components/CatalogItem/CatalogItem'
import Paginate from '../../components/Pagination/Pagination'
// import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import RecommendationLine from '../../components/RecommendationLine/RecommendationLine'
import CatalogFilter from '../../components/CatalogFilter/CatalogFilter'
import CatalogBarMob from './CatalogBarMob'

import api from "../../api";
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    // SET_SCROLL_POSITION,
} from '../../constants/productConstants'

const CatalogScreen = ({history, match}) => {
    const { innerWidth: width } = window;
    const isMobile =  (width>700) ? false : true

    const skeleton = Array(12)

    const [sortListCollapseEvent, setSortListCollapseEvent] = useState(0);
    const [sortBy, setSortBy] = useState('created_at');
    const [search, setSearch] = useState('')
    const [products, setProducts] = useState([]);
    const [countProducts, setCountProducts] = useState(1);
    const [pages, setPages] = useState(1);

    let keyword = history.location.search
    let urlParams = new URLSearchParams(keyword)
    // console.log('urlParams1', urlParams.toString())
    // urlParams.set('inStock', false)
    // console.log('urlParams2', urlParams.toString())

    let page = urlParams.get('p')

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const productList = useSelector(state => state.productList)
    const { error, loading, success } = productList

    const {wishlistItems} = useSelector(state => state.wishlist)

    const getProductList = async () => {
        try {
            dispatch({ type: PRODUCT_LIST_REQUEST })

            const response_items = await api.get(`/items/${keyword}`)

            dispatch({
                type: PRODUCT_LIST_SUCCESS,
            })

            setProducts(response_items.data.results)
            setPages(response_items.data.last_page)
            setCountProducts(response_items.data.count)
        } catch (error) {
            dispatch({
                type: PRODUCT_LIST_FAIL,
                payload: error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
            })
            setProducts([])
        }
    }

    useEffect(() => {
        // Get all products
        getProductList()

        // Get wishlist
        if ((wishlistItems.length === 0) & (userInfo)){
            dispatch(fetchWishlist())
        }
    }, [dispatch, keyword])

    useEffect(() => {
        // For sort list toggling
        document.addEventListener("mousedown", handleSortListOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleSortListOutsideClick);
          };
    }, [])

    useEffect(() => {
        // Setup filters that persist from location 
        // if(urlParams.get('orderBy')) {
        //     setSortBy(keyword.split('orderBy=')[1].split('&')[0])
        // }
        urlParams.get('search') && setSearch(urlParams.get('search'))
        urlParams.get('orderBy') && setSortBy(urlParams.get('orderBy'))
    }, [keyword])


    const nodeSortList = useRef();
    const handleSortListOutsideClick = e => {
      if (nodeSortList.current.contains(e.target)) {
        return;
      }
      setSortListCollapseEvent(Date.now())
    };


    const [filterMob, setFilterMob] = useState(false);
    const handleFilterMob = () => {
        if (isMobile){
            setFilterMob(!filterMob)     
        }
    }

    const sortList = [
        {name: 'Сначала дорогие', keyword: 'price_desc'},
        {name: 'Сначала дешевые', keyword: 'price_asc'},
        {name: 'Сначала новые', keyword: 'created_at'},
    ]

    const sortByHandler = (toggle, param) => {
        toggle()
        setSortBy(param)

        urlParams.set('orderBy', param)
        history.push(
            {
                pathname: `/catalog`,
                search: urlParams.toString(),
            })
    }

    // console.log('keyword', keyword.get('search'))
    // console.log('new URLSearchParams(useLocation().search)', new URLSearchParams(keyword).get('search'))
    const searchHandler = () => {
        // e.preventDefault()
        // const new_path = (keyword==='') ? `?search=${search}` : `${keyword}&search=${search}`
        urlParams.set('search', search)
        history.push({
            pathname: `/catalog`,
            search: urlParams.toString(),
        })
    } 

    const sortDropdownList = (mobile) =>
            <div ref={nodeSortList}>
                <SlideToggle collapsed = {true} bestPerformance={true} collapseEvent={sortListCollapseEvent}>
                    {({ toggle, setCollapsibleElement }) => (
                    <Fragment>
                        <div className="catalog-nav__sort-title" onClick={toggle}>
                            <p>{mobile ? "Сортировать" : sortList.filter(x=>x.keyword===sortBy)[0].name}</p>
                            
                        </div>
                        <div className="catalog-nav__list-outer" ref={setCollapsibleElement}>
                            <ul className="catalog-nav__list">
                                {sortList.map((sorter, index)=>{
                                    return(
                                        <li 
                                            key={index} 
                                            onClick={()=>sortByHandler(toggle, sorter.keyword)}
                                            className={`${sortBy===sorter.keyword && "catalog-nav__item_active"}`}
                                        >
                                            <a>{sorter.name}</a>
                                        </li>
                                        )
                                })}
                            </ul>
                        </div>
                        </Fragment>
                    )}
                </SlideToggle>
            </div>                                    

    const searchBar = 
        <div className="catalog-search">
            <input 
                onChange={(e)=>setSearch(e.target.value)} 
                value={search} 
                type="text" 
                name="search" 
                className="catalog-search__input" 
                placeholder="Поиск по каталогу"
            />
            <div className="catalog-search__submit" onClick={searchHandler}>
                <i className="fa-search"></i>
                {/*<input type="submit"/>*/}
            </div>
        </div>


    const [searchBarActive, setSearchBarActive] = useState(false)

    return (
        <Fragment>
            <div className="catalog page-section">
                <div className="section-frame">
                    <div className="catalog-content">
                        <Transition in={filterMob} timeout={0}>
                            {state => (
                              ((!isMobile || filterMob) && 
                                <CatalogFilter 
                                    state={state} 
                                    handleFilterMob={handleFilterMob} 
                                    getProductList={getProductList}

                                />)
                            )}
                        </Transition>

                        <div className="catalog-cart">
                            <h1 className="page-title"><span>Каталог</span></h1>

                            <div className="catalog-main">
                                <div className="catalog-nav">
                                    {searchBar}

                                    <div className="catalog-nav-frame">
                                        <div className="catalog-nav__sort">
                                            <h3>Сортировать</h3>
                                            {sortDropdownList()}
                                        </div>
                                    </div>
                                </div>

                                {isMobile && 
                                    <CatalogBarMob 
                                        handleFilterMob={handleFilterMob} 
                                        sortDropdownList={sortDropdownList} 
                                        search={search}
                                        setSearch={setSearch}
                                        searchHandler={searchHandler}
                                    />
                                }

                                <div className="catalog-info">
                                    <p className="catalog-counter">Найдено товаров: {loading || countProducts}</p>

                                </div>
                                <div className="catalog-product">
                                    {error 
                                        ? 
                                        <div className="catalog-warning-message">Возникла ошибка при загрузке информации о каталоге. Мы уже работаем над ней и исправим в ближайшее время.</div>
                                        :
                                        loading 
                                            ?
                                            <div className="catalog-product__list">
                                                {skeleton.fill().map((item, index_skeleton) => <ProductLoader key={index_skeleton}/> )}
                                            </div>
                                            : 
                                            products.length===0
                                                ? 
                                                <div className="catalog-warning-message">К сожалению, по вашему запросу в нашем каталоге нет игрушек. Предложите нам игрушки, которые искали, и мы постараем добавить их в наш каталог.</div>
                                                : 
                                                <div className="catalog-product__list">
                                                    {products.map((product, index_product) => {
                                                    return(
                                                        <CatalogItem product={product} key={index_product}  isInWishlist={wishlistItems.map(x=>x.item_id).includes(product.id)}/>
                                                        )})}
                                                </div>
                                    }
                                    <Paginate page={page} pages={pages} keyword={keyword}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="recommendations">
                <div className="section-frame">
                    <h2 className="page-title"><span>Рекомендации</span></h2>
                    <RecommendationLine/>
                </div>
            </div>*/}

        </Fragment>
    );
};

export default CatalogScreen;
