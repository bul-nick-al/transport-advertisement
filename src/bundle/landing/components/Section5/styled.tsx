import styled from 'styled-components';

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    background: linear-gradient(
        270deg,
        rgb(25, 145, 235) 0%,
        rgb(0, 174, 239) 100%
    );
    padding: 0 15px;
    height: 50px;
    align-items: center;

    @media (min-width: 768px) {
        height: 80px;
    }
`;

export const Phone = styled.div`
    font-size: 24px;
    color: white;
`;
