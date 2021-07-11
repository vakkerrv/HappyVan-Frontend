import styled from 'styled-components';

export const StyledMenu = styled.nav`
  z-index: 10;
  // height: 100%;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 25px 35px rgba(176, 176, 176, 0.35);
  border-top: 1px solid #E8E8E8;
  top: 80px;
  a {
      padding: 12px 20px;
      display: flex!important;
      align-items: center;
      border-bottom: 1px dashed #E6E6E6;
      font-size: 14px;
  }
  img {
      width: 30px;
      margin-right: 20px;
  }

  position: absolute;
  transition: transform 0.3s ease-in-out;
  transform: translateX(+100%);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(+100%)'};

`;