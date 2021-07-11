import styled from "styled-components";
import {mainColor} from '../../constants/styles';

export const Tabs = styled.div`
  overflow: hidden;
  height: 3em;

  border-bottom: 2px solid #EEEEEE;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 25%;
  position: relative;

  background-color: inherit;
  font-size: 22px;
  height: 100%;
  // transition: 0.5s ease-in-out;

  &::before {
    content: '';
    width: 0px;
    height: 4px;
    background: ${mainColor};
    border-radius: 150px;
    position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    margin: 0 auto;
    transition: .3s;
    width: ${({ open }) => open ? '39px' : '0px'};
  }
  :hover {
    &::before {
      width: 39px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 20px;
`;


export const DropdownButton = styled.div`
    width: 100%;
    height: 40px;
    padding: 0 17px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 150px;
    background: #FFFFFF;
    border: 1px solid #ECECEC;
    box-sizing: border-box;
    // cursor: pointer;
`

export const DropdownList = styled.ul`
    position: absolute;
    top: 45px;
    padding: 10px 0px;
    width: 100%;
    background: #fff;
    border: 1px solid #ECECEC;
    border-radius: 10px;
    box-sizing: border-box;
    // font-size: 14px;
    line-height: 28px;
    // position: relative;
    z-index: 2;

    li{
      padding: 5px 17px;

      :hover {
        box-shadow: 0px 10px 35px rgba(169, 169, 169, 0.3);
      }
    }
`