import * as React from 'react';
import styled from 'styled-components';

export const AuthButton = styled.button`
  width: 115px;
  height: 35px;
  background: none;
  color: white;
  font-family: 'ProximaNovaSemibold';
  border: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  &:active {
    background: white;
    color: #1991eb;
  }
`;
export const AuthButtonReg = styled(AuthButton)`
  border-radius: 4px;
  border: 1px white solid;
`;

const StyledSvg = styled.svg`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

const DivWrap = styled.div`
  width: 36px;
  height: 30px;
  position: relative;
  display: table;
`;

const IconDiv = styled.div`
  position: absolute;
  top: calc(50% - 7px);
  height: 20px;
`;
const CirclrDiv = styled.div`
  position: absolute;
  height: 20px;
  z-index: 10;
  top: calc(50% - 16px);
  left: 11px;
`;

const UserIcon = (props: any) => {
  return (
    <StyledSvg {...props} viewBox="0 0 20 20">
      <path
        fill="FFF"
        d="M15.000,16.000 L12.756,16.000 L3.244,16.000 L1.000,16.000 C0.448,16.000 -0.000,15.552 -0.000,15.000 L-0.000,12.000 C-0.000,10.136 1.647,8.528 4.067,7.669 C4.030,7.450 4.000,7.229 4.000,7.000 L4.000,4.000 C4.000,1.791 5.791,-0.000 8.000,-0.000 C10.209,-0.000 12.000,1.791 12.000,4.000 L12.000,7.000 C12.000,7.229 11.969,7.450 11.932,7.669 C14.352,8.528 16.000,10.136 16.000,12.000 L16.000,15.000 C16.000,15.552 15.552,16.000 15.000,16.000 ZM10.000,4.000 C10.000,2.895 9.104,2.000 8.000,2.000 C6.895,2.000 6.000,2.895 6.000,4.000 L6.000,7.000 C6.000,8.104 6.895,9.000 8.000,9.000 C9.104,9.000 10.000,8.104 10.000,7.000 L10.000,4.000 ZM14.000,12.000 C14.000,10.920 12.849,9.982 11.138,9.453 C10.405,10.388 9.279,11.000 8.000,11.000 C6.720,11.000 5.594,10.388 4.862,9.453 C3.151,9.982 2.000,10.920 2.000,12.000 L2.000,14.000 L3.000,14.000 L3.557,14.000 L11.000,14.000 L12.000,14.000 L12.443,14.000 L14.000,14.000 L14.000,12.000 Z"
      />
    </StyledSvg>
  );
};
const LtlCircle = (props: any) => {
  let num = Math.min(props.num, 99);
  let x = num > 9 ? 3 : 7;
  return (
    <StyledSvg {...props} viewBox="0 0 20 20">
      <circle r="9" cx="10" cy="10" fill="#FF690F" />
      <text x={x} y="15" fontSize="12" stroke="none" fill="white">
        {num}
      </text>
    </StyledSvg>
  );
};
export const UserIconWithCircle = (props: any) => {
  return (
    <DivWrap>
      <CirclrDiv>
        <LtlCircle {...props} />
      </CirclrDiv>
      <IconDiv>
        <UserIcon />
      </IconDiv>
    </DivWrap>
  );
};

const BestBuyIcon = (props: any) => {
  return (
    <StyledSvg {...props} viewBox="0 0 20 20">
      <path
        fill="FFF"
        d="M9.896,13.143 C9.896,12.807 9.836,12.488 9.725,12.190 L12.041,12.190 C11.934,12.488 11.875,12.807 11.875,13.143 C11.875,14.720 13.205,16.000 14.844,16.000 C16.482,16.000 17.812,14.720 17.812,13.143 C17.812,11.566 16.482,10.286 14.844,10.286 L8.312,10.286 C7.877,10.286 7.521,9.942 7.521,9.524 C7.521,9.105 7.877,8.762 8.312,8.762 L15.121,8.762 C15.837,8.762 16.454,8.358 16.736,7.771 C16.843,7.550 18.893,3.051 18.893,3.051 C18.948,2.929 19.000,2.807 19.000,2.666 C19.000,2.247 18.643,1.905 18.208,1.905 L5.850,1.905 L5.518,0.918 C5.363,0.388 4.932,-0.000 4.354,-0.000 L0.989,-0.000 C0.443,-0.000 -0.000,0.426 -0.000,0.952 C-0.000,1.478 0.443,1.905 0.989,1.905 L3.068,1.905 C3.420,1.905 3.717,2.126 3.820,2.426 L5.490,10.643 C4.576,11.127 3.958,12.068 3.958,13.143 C3.958,14.720 5.288,16.000 6.927,16.000 C8.566,16.000 9.896,14.720 9.896,13.143 ZM7.917,13.143 C7.917,13.668 7.473,14.095 6.927,14.095 C6.381,14.095 5.937,13.668 5.937,13.143 C5.937,12.617 6.381,12.190 6.927,12.190 C7.473,12.190 7.917,12.617 7.917,13.143 ZM15.833,13.143 C15.833,13.668 15.390,14.095 14.844,14.095 C14.297,14.095 13.854,13.668 13.854,13.143 C13.854,12.617 14.297,12.190 14.844,12.190 C15.390,12.190 15.833,12.617 15.833,13.143 Z"
      />
    </StyledSvg>
  );
};

export const BestBuyIconWithCircle = (props: any) => {
  return (
    <DivWrap {...props}>
      <CirclrDiv>
        <LtlCircle num={props.num} clasName={props.className} />
      </CirclrDiv>
      <IconDiv>
        <BestBuyIcon />
      </IconDiv>
    </DivWrap>
  );
};

export const IconGroup = styled.div`
  align-self: center;
  justify-self: end;
  > div {
    float: left;
  }
`;

export const UserPhoto = styled.div`
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  padding: 0 10px;
  img {
    width: 36px;
    height: 36px;
  }
`;
const StyledSvgDD = styled.svg`
  cursor: pointer;
  width: 7px;
  height: 4px;
`;

const DropDown = (props: any) => {
  return (
    <StyledSvgDD {...props} viewBox="0 0 7 4">
      <path
        fill="FFF"
        d="M6.807,0.935 L3.876,3.809 C3.658,4.023 3.306,4.023 3.089,3.809 L0.158,0.935 C-0.059,0.721 -0.059,0.374 0.158,0.160 C0.375,-0.054 0.727,-0.054 0.944,0.160 L3.482,2.649 L6.021,0.160 C6.238,-0.054 6.590,-0.054 6.807,0.160 C7.024,0.374 7.024,0.721 6.807,0.935 Z"
      />
      />
    </StyledSvgDD>
  );
};
const DropDownWrap = styled.div`
  margin-top: 5px;
  width: 7px;
  height: 36px;
  position: relative;
  display: table;
`;

export const DropDownIcon = (props: any) => {
  return (
    <DropDownWrap>
      <DropDown />
    </DropDownWrap>
  );
};

export const ProfileStyled = styled.div`
  display: inline-block;
  position: relative;
  div {
    float: left;
  }
  .dd-show {
    display: block;
  }
  .dd-hide {
    display: none;
  }
`;
export const DropDownMenu = styled.div`
  position: absolute;
  top: 43px;
  left: -60px;
  border-width: 1px;
  border-color: rgb(223, 227, 233);
  border-style: solid;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.08);
  width: 143px;
  height: 115px;
`;

export const Item = styled.div`
  font-family: 'ProximaNovaSemibold';
  cursor: pointer;
  display: block;
  font-size: 14px;
  color: rgb(53, 64, 82);
  text-align: left;
  padding: 10px 15px;
  width: 112px;
  &:hover {
    color: #2ea2f8;
    background-color: #f1f4f8;
  }
`;
export const Divider = styled.div`
  border-width: 1px;
  border-color: rgb(223, 227, 233);
  border-style: solid;
  background-color: rgb(255, 255, 255);
  width: 142px;
  height: 0;
`;
