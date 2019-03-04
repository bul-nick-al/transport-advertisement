import * as React from 'react';
import { RouteTableInterface } from './interfaces';
import RoutesTable from './RoutesTable';

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
    // {
    //     transportName: 'Троллейбусы',
    //     routes: [
    //         { routeName: 'Маршрут №1', routeStops: 'Холодная Гора - Вокзал' },
    //         { routeName: 'Маршрут №2', routeStops: 'Рынок - Вокзал' },
    //         { routeName: 'Маршрут №3', routeStops: 'Холодная Гора - Рынок' },
    //     ],
    // },
];

class RoutesTableContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                {mockedRoutesTables.map(table => {
                    console.log('Table', table);
                    return <RoutesTable table={table} />;
                })}
            </React.Fragment>
        );
    }
}

export default RoutesTableContainer;
