import * as React from 'react';

import styled from 'styled-components';

export interface RoutesTableProps {}

export interface RoutesTableState {}

const RoutTable = styled.table`
    border: 1px solid black;
    border-collapse: collapse;
`;

const TableRow = styled.tr`
    border: 1px solid black;
    border-collapse: collapse;
    padding: 15px;
`;

class RoutesTable extends React.Component<RoutesTableProps, RoutesTableState> {
    state = {
        name: 'Маршрутное такси',
        rows: [
            { routeName: 'Маршрут №1', routeStops: 'Холодная Гора - Вокзал' },
            { routeName: 'Маршрут №2', routeStops: 'Вокзал - Холодная гора' },
            { routeName: 'Маршрут №3', routeStops: 'Холодная Гора - Рынок' },
            { routeName: 'Маршрут №4', routeStops: 'Рынок - Вокзал' },
        ],
    };

    render() {
        return (
            <div>
                <RoutTable>
                    <caption>{this.state.name}</caption>
                    {this.state.rows.map(row => (
                        <TableRow>
                            <td>{row.routeName}</td>
                            <td>{row.routeStops}</td>
                        </TableRow>
                    ))}
                </RoutTable>
            </div>
        );
    }
}

export default RoutesTable;
