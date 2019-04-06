import styled from 'styled-components';

const StyledTile = styled.div`
    display: block;
    border-width: 1px;
    border-color: rgb(230, 234, 238);
    border-style: solid;
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    width: ${props => props.theme.width};
    height: ${props => props.theme.height};
    flex-shrink: 0;
    -webkit-box-shadow: -5px 4px 67px -47px rgba(77, 77, 77, 0.73);
    -moz-box-shadow: -5px 4px 67px -47px rgba(77, 77, 77, 0.73);
    box-shadow: -5px 4px 67px -47px rgba(77, 77, 77, 0.73);
    text-align: center;
    margin: 5px 10px;
    padding: 10px;
`;

export { StyledTile };
