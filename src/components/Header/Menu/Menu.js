import React from 'react';
import { Link } from 'react-router-dom';

import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

import menu1 from "../../../images/icon/menu/menu-1.svg";
// import menu2 from "../../../images/icon/menu/menu-2.svg";
import menu3 from "../../../images/icon/menu/menu-3.svg";
import menu4 from "../../../images/icon/menu/menu-4.svg";


const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={()=>setOpen(false)}>
        <img src={menu1} alt=""/>
        <span>Главная</span>
      </Link>
      <Link to="/pricing" onClick={()=>setOpen(false)}>
        <img src={menu3} alt=""/>
        <span>Тарифы</span>
      </Link>
      <Link to="/about" onClick={()=>setOpen(false)}>
        <img src={menu4} alt=""/>
        <span>Как это работает?</span>
      </Link>

    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;