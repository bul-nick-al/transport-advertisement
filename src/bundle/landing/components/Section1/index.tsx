import * as React from 'react';
import { Logo } from '../logo';
import Identification from '../identification';
import { tram } from '../../assets';
import styled from 'styled-components';
import { calcResponsive } from './styled';

import { StyledNav, HeaderLine, ContentBlock } from './styled';

const BackGround = styled.div`
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  &:before{
    background-image: url('${tram}');
    background-size: cover;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    opacity: 0.4;
  }
  
  &:after{
    background-color: rgb(25, 145, 235);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
  }
`;

const Button = styled.button`
    color: white;
    height: 50px;
    font-size: ${calcResponsive(9, 14)};
    text-decoration: none;
    padding: ${calcResponsive(5, 8) + ' ' + calcResponsive(5, 5)};
    background-color: rgb(233, 134, 58);
    border-radius: 25px;
    width: 270px;
    border: 0;
    margin: 0 auto;
    &:hover{
      cursor: pointer;
    };
`;

export class FirstSection extends React.PureComponent<any, any> {
    openAPP = (e, app) => {
        e.preventDefault();
        this.props.openApp(app);
    };

    render() {
        return (
            <BackGround>
                <StyledNav>
                    <Logo />
                    <Identification {...this.props} />
                </StyledNav>
                <ContentBlock>
                    <HeaderLine>
                        <h1>
                            MediaPult - позволит вам разместить рекламу на
                            транспорте вашего города в режиме онлайн.
                        </h1>
                    </HeaderLine>
                    <Button>Попробуй сейчас</Button>
                </ContentBlock>
            </BackGround>
        );
    }
}
