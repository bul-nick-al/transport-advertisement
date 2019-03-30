import styled from 'styled-components';
// 1050 максимальный размер блока с контентом
// 360 минимальный размер блока с контентом
export const calcResponsive = (min, max) =>
    `calc(${min}px + (${max} - ${min}) * ((100vw - 360px) / (1050 - 360)))`;

export const StyledNav = styled.nav`
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: space-between;
    margin-left: 15px;
    margin-right: 15px;
`;

export const ContentBlock = styled.div`
    display: grid;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 25px;
    margin-left: 15px;
    margin-right: 15px;

    @media (min-width: 768px) {
        grid-template-rows: 100px 100px;
    }
`;

export const HeaderLine = styled.header`
    color: white;
    h1 {
        font-size: ${calcResponsive(14, 32)};
        font-weight: 500;
    }

    @media (min-width: 768px) {
        h1 {
            font-size: ${calcResponsive(26, 30)};
        }

        h2 {
            font-size: ${calcResponsive(15, 17)};
        }
    }

    @media screen and (min-width: 2048px) {
        h1 {
            font-size: 36px;
        }
        h2 {
            font-size: 22px;
        }
    }
`;
