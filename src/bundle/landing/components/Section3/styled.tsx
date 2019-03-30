import styled, { css } from 'styled-components';
import { device } from '../../__data__/constants';

const calcResponsive = (min, max) =>
    `calc(${min}px + (${max} - ${min}) * ((100vw - 360px) / (1050 - 360)))`;

export const Wrapper = styled.div`
    border-top: 1px solid #dcdcdc;
    background-color: rgb(239, 243, 246);
    padding: 25px 0;
`;

export const Title = styled.h3`
    color: #00aeef;
    font-size: ${calcResponsive(20, 25)};
    padding: 20px 150px;
    text-align: center;
`;

export const Desc = styled.p`
    padding: 20px 150px;
    text-align: center;
`;

export const ImageWrapper = styled.div`
    padding: 10px 20px;
    position: relative;
`;

export const Image1Div = styled.div`
    z-index: 2;
`;

export const Image2Div = styled.div`
    position: absolute;
    top: 42px;
    left: 320px;
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
