import styled, { css } from 'styled-components';
import { device } from '../../__data__/constants';

const calcResponsive = (min, max) =>
  `calc(${min}px + (${max} - ${min}) * ((100vw - 360px) / (1050 - 360)))`;

export const Wrapper = styled.div`
  background-color: rgb(239, 243, 246);
  padding: 25px 0;
`;

export const ContentBlock = styled.div`
  display: grid;
  grid-template-columns: minmax(330px, 1050px);
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 15px;
  margin-right: 15px;
`;

export const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
  @media ${device.desktop} {
    grid-template-columns: minmax(200px, 270px) minmax(200px, 270px) minmax(
        200px,
        270px
      );
  }
  @media screen and (min-width: 2048px) {
    grid-template-columns: 220px 280px 220px;
  }
`;

export const AppButton = styled.a`
  position: relative;
  align-items: center;
  text-align: center;
  text-decoration: none;
 
  img {
    width: ${calcResponsive(100, 185)};  
  }

  > div {
    display: none;
  }

  .blueOne {
    color: #00aeef;
    font-size: ${calcResponsive(14, 18)};
  }

  @media (min-width: 768px) {
    
    > div {
      display: block;
      color: #354052;
      font-size: ${calcResponsive(20, 24)};
    }
  }
`;
