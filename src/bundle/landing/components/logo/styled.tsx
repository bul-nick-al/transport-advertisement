import styled from 'styled-components';

export const StyledLogo = styled.div`
    font-size: 30px;
    color: rgb(239, 243, 246);
    font-weight: 600;
    .desktop {
        display: none;
    }
    .desktop span:first-child {
        margin-right: 10px;
    }
    .pult {
        color: #354052;
    }

    .desktop.desc {
        font-size: 12px;
        margin: 0;
    }

    @media (min-width: 768px) {
        .mobile {
            display: none;
        }
        .desktop {
            display: block;
        }
    }
`;
