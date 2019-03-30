import * as React from 'react';
import {
    Wrapper,
    AppButton,
    Title,
    Desc,
    ImageWrapper,
    Image2Div,
    Image1Div,
} from './styled';

import { slide2, slide4 } from '../../assets';
import styled, { keyframes }  from 'styled-components';

const imageAnimation = keyframes`
  100% {left: 0}
`;

const Image1 = styled.img`
    left: -10px;
    width: 500px;
    box-shadow: 10px -9px 22px -10px rgba(120, 112, 120, 1);
    position: relative;
    -webkit-animation: ${imageAnimation} 5s forwards;
    -webkit-animation-delay: 2s;
    animation: ${imageAnimation} 5s forwards;
    animation-delay: 2s;
`;

const Image2 = styled.img`
    width: 600px;
    box-shadow: 10px -9px 22px -10px rgba(120, 112, 120, 1);
    position: absolute;
`;

export class ThirdSection extends React.PureComponent<any, any> {
    openAPP = (e, app) => {
        e.preventDefault();
        this.props.openApp(app);
    };

    render() {
        return (
            <Wrapper>
                <Title>
                    Mediapult в режиме реального времени рассчитывает стоимость
                    рекламы на транспорте Хабаровска
                </Title>
                <Desc>
                    Система самостоятельно выставит вам счет на оплату,
                    предоставит все закрывающие документы, а так же загрузит
                    фотоотчет в ваш личный кабинет в системе.
                </Desc>
                <ImageWrapper>
                    <Image2Div>
                        <Image2 src={slide4} alt={'Выбор транспорта'} />
                    </Image2Div>
                    <Image1Div>
                        <Image1 src={slide2} alt={'Корзина'} />
                    </Image1Div>
                </ImageWrapper>
            </Wrapper>
        );
    }
}
