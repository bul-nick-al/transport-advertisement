import * as React from 'react';
import { RouteTableInterface } from './interfaces';
import RoutesTable from './RoutesTable';
import styled from 'styled-components';

const TableContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;
`;

const mockedRoutesTables: RouteTableInterface[] = [
    {
        transportName: 'Маршрутное такси',
        routes: [
            { routeName: 'Маршрут №1', routeStops: 'Холодная Гора - Вокзал' },
            { routeName: 'Маршрут №2', routeStops: 'Вокзал - Холодная гора' },
            { routeName: 'Маршрут №3', routeStops: 'Холодная Гора - Рынок' },
            { routeName: 'Маршрут №4', routeStops: 'Рынок - Вокзал' },
        ],
    },
    {
        transportName: 'Троллейбусы',
        routes: [
            { routeName: 'Маршрут №1', routeStops: 'Холодная Гора - Вокзал' },
            { routeName: 'Маршрут №2', routeStops: 'Рынок - Вокзал' },
            { routeName: 'Маршрут №3', routeStops: 'Холодная Гора - Рынок' },
        ],
    },
    {
        transportName: 'Троллейбусы',
        routes: [
            { routeName: 'Маршрут №1', routeStops: 'Холодная Гора - Вокзал' },
            { routeName: 'Маршрут №2', routeStops: 'Рынок - Вокзал' },
            { routeName: 'Маршрут №3', routeStops: 'Холодная Гора - Рынок' },
            { routeName: 'Маршрут №3', routeStops: 'Холодная Гора - Рынок' },
            { routeName: 'Маршрут №3', routeStops: 'Холодная Гора - Рынок' },
        ],
    },
];

class RoutesTableContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <TableContainer>
                {mockedRoutesTables.map(table => (
                    <RoutesTable table={table} />
                ))}
            </TableContainer>
        );
    }
}

export default RoutesTableContainer;
