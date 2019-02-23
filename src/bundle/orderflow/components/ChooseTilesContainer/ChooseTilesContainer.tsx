import * as React from 'react';
import { TransportTileChose } from '../TransportTileChose';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
`;

class ChooseTilesContainer extends React.Component<any, any> {
    state = {
        transportTiles: [
            {
                id: 0,
                name: 'Пазики',
                img: require('../../../../assets/vehicles/pazik.png'),
            },
            {
                id: 1,
                name: 'Такси',
                img: require('../../../../assets/vehicles/taxi.png'),
            },
            {
                id: 0,
                name: 'Трамваи',
                img: require('../../../../assets/vehicles/tram.png'),
            },
            {
                id: 0,
                name: 'Автобусы',
                img: require('../../../../assets/vehicles/bus.png'),
            },
            {
                id: 0,
                name: 'Тролейбусы',
                img: require('../../../../assets/vehicles/trolley.png'),
            },
            {
                id: 0,
                name: 'Маршрутное такси',
                img: require('../../../../assets/vehicles/small-bus.png'),
            },
        ],
    };
    render() {
        return (
            <Container>
                {this.state.transportTiles.map(tile => (
                    <TransportTileChose name={tile.name} img={tile.img} />
                ))}
            </Container>
        );
    }
}

export default ChooseTilesContainer;
