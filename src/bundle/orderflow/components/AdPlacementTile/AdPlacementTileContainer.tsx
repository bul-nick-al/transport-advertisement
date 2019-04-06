import * as React from 'react';
import { AdPlacementTile } from '../AdPlacementTile';
import styled from 'styled-components';

const Container = styled.div`
    width: 75%;
    float: right;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    overflow: auto;
`;

const tilesData = [
    {
        id: 0,
        name: 'Стандарт (27 м2)',
        img: require('../../../../assets/vehicles/standart.png'),
        company: 'Хабаровск драйв',
        comments: 'Цена включает аренду, печать и монтаж',
    },
    {
        id: 1,
        name: 'Вокруг (46,8 м2)',
        img: require('../../../../assets/vehicles/vokrug.png'),
        company: 'Хабаровск драйв',
        comments: 'Цена включает аренду, печать и монтаж',
    },
    {
        id: 0,
        name: 'Полоски (5 м2)',
        img: require('../../../../assets/vehicles/poloski.png'),
        company: 'Хабаровск драйв',
        comments: 'Цена включает аренду, печать и монтаж',
    },
    {
        id: 0,
        name: 'Флажок (7,3 м2)',
        img: require('../../../../assets/vehicles/flazhok.png'),
        company: 'Хабаровск драйв',
        comments: 'Цена включает аренду, печать и монтаж',
    },
    {
        id: 0,
        name: 'Заднее стекло (1,8 м2)',
        img: require('../../../../assets/vehicles/zadnee_steklo.png'),
        company: 'Хабаровск драйв',
        comments: 'Цена включает аренду, печать и монтаж',
    },
    {
        id: 0,
        name: 'Заднее стекло (1,8 м2)',
        img: require('../../../../assets/vehicles/zandaya_chast.png'),
        company: 'Хабаровск драйв',
        comments: 'Цена включает аренду, печать и монтаж',
    },
];

class AdPlacementTileContainer extends React.Component<any, any> {
    state = {
        transportTiles: tilesData,
    };
    render() {
        return (
            <Container>
                {this.state.transportTiles.map(tile => (
                    <AdPlacementTile {...tile} />
                ))}
            </Container>
        );
    }
}

export default AdPlacementTileContainer;
