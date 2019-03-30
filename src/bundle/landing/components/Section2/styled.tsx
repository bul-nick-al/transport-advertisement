import styled, { css } from 'styled-components';
import { Colors } from '../../__data__/constants/colors';

const calcResponsive = (min, max) =>
    `calc(${min}px + (${max} - ${min}) * ((100vw - 360px) / (1050 - 360)))`;

export const Wrapper = styled.div`
    padding: 40px 0;
`;

export const ContentBlock = styled.div`
    display: grid;
    grid-template-columns: minmax(330px, 1050px);
    grid-template-rows: auto auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 15px;
    margin-right: 15px;
`;

export const DescBlock = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    font-size: 100%;
`;

export const TitleDesc = styled.div`
    font-size: ${calcResponsive(26, 30)};
    color: ${Colors.bluish};
    text-align: center;
`;

export const DeskTitle = styled.p`
    color: #00aeef;
    font-size: ${calcResponsive(20, 25)};
    padding: 15px 0;
`;

export const DescGroup = styled.div`
    display: grid;
    grid-template-rows: repeat(3, auto);
    margin-top: 20px;
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, auto);
        grid-template-rows: auto;
        align-self: center;
        text-align: center;
    }
`;

export const DescPane = styled.div`
    display: grid;
    grid-template-columns: 20vw auto;
    grid-column-gap: 20px;
    position: relative;
    img {
        width: 100%;
        margin: 0 auto;
    }

    @media (min-width: 768px) {
        grid-template-rows: 205px 300px;
        grid-row-gap: 20px;
        grid-template-columns: auto;
        align-items: center;
        justify-content: center;
        img {
            width: 170px;
        }
    }
`;

export const DescTextBody = styled.div`
    padding: 0 2vw;
    font-size: 1em;
    color: ${Colors.bluish};
    align-self: center;
    text-align: left;
    @media (min-width: 768px) {
        align-self: start;
    }
`;
