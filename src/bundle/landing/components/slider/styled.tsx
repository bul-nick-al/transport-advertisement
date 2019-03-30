import styled, { css } from 'styled-components';
import * as React from 'react';
import { Colors } from '../../__data__/constants/slider';

export const SliderWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 520px 80px auto;
  align-items: center;
  text-align: center;
  position: relative;
`;
export const SlideContainer = styled.div`
  width: 100%;
  height: 520px;
  position: relative;
  
}
  /* пока для меня это магический кусок начало */
  &:before,
  &:after {
    content: ' ';
    display: table;
  }

  &:after {
    clear: both;
  }
  /* пока для меня это магический кусок конец */
  img {
    width: 705px;
    height: 505px;
  }

  .slideForm {
    display: inline-block;
    position: absolute;
    bottom: 0;
    transition: All 0.5s ease-in-out;
    cursor: pointer;
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.14);
  }
  .lefthidden {
    left: calc(50% - 352px);
    opacity: 0;
    transform: scale(0.8);
  }
  .leftSlide {
    opacity: 1;
    left: calc(50% - 620px);
    z-index: 0;
    transform-origin: center bottom;
    transform: scale(0.8);
  }
  .centerSlide {
    z-index: 1;
    transform-origin: center bottom;
    left: calc(50% - 352px);
  }
  .rightSlide {
    left: calc(50% - 85px);
    z-index: 0;
    transform-origin: center bottom;
    transform: scale(0.8);
  }

  .fromLeft {
    animation-name: fromLeft;
    animation-duration: 0.75s;
    /* animation-fill-mode: forwards; */
  }
  .fromRight {
    animation-name: fromRight;
    animation-duration: 0.75s;
    /* animation-fill-mode: forwards; */
  }
  @keyframes fromLeft {
    0%{left: calc(50% - 620px);}
    50%{left: 0%;}
    100%{left: calc(50% - 352px);}
  }
  @keyframes fromRight {
    0%{left: calc(50% - 85px);}
    50%{left: 60%;}
    100%{left: calc(50% - 352px);}
  }
  .z1 {
    z-index: 1;
  }
  .z2 {
    z-index: 2;
  }
  .z3 {
    z-index: 3;
  }
`;
export const SliderHeader = styled.div`
  color: ${Colors.bluish};
  font-size: 32px;
  display: grid;
  align-items: end;
`;
export const SliderDescription = styled.div`
  margin-top: 20px;
  color: ${Colors.bluish};
  font-size: 24px;
`;

export const SlideImg = styled.img``;

interface DivProps {
  active?: boolean;
}
export const Togl = styled.div`
  display: inline-block;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 5px;
  margin-right: 5px;
  width: 50px;
  cursor: pointer;
  hr {
    border: none;
    height: 5px;
    background-color: ${(props: DivProps) =>
      props.active ? '#00aeef' : '#b2e7fa'};
  }
`;
