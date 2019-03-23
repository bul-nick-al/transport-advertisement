import * as React from 'react';
import styled from 'styled-components';
import Tile from '../../../common/components/Tile';
import { HeaderButton } from '../../../common/components/Buttons';

const Image = styled.img`
    margin: 15px 0 0 0;
`;

const Name = styled.p`
    font-size: 16px;
    color: rgb(29, 37, 49);
    line-height: 1;
`;

const Desc = styled.span`
    font-size: 13px;
    color: rgb(132, 140, 152);
`;

class AdPlacementTile extends React.Component<any, any> {
    render() {
        return (
            <Tile width={'210px'}>
                <Image src={this.props.img} />
                <Name>{this.props.type}</Name>
                <Desc>Компания: {this.props.company}</Desc>
                <Desc>Количество месяцев: 12</Desc>
                <Desc>Количество ТС: 12</Desc>
                <Desc>{this.props.comments}</Desc>
                <HeaderButton>В корзину</HeaderButton>
            </Tile>
        );
    }
}

export default AdPlacementTile;
