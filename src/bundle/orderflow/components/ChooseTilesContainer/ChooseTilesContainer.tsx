import * as React from 'react';
import { TransportTileChose } from '../TransportTileChose';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
    background: #eff3f6;
`;

class ChooseTilesContainer extends React.Component<any, any> {
    state = {
        transportTiles: [
            {
                id: 0,
                name: 'Пазики',
                img: require('../../../../assets/img/pazik.png'),
            },
            {
                id: 1,
                name: 'Такси',
                img: require('../../../../assets/img/taxi.png'),
            },
            {
                id: 0,
                name: 'Трамваи',
                img: require('../../../../assets/img/tram.png'),
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
