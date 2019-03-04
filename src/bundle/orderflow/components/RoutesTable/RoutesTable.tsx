import * as React from 'react';
import { RouteTableInterface } from './interfaces';

import styled from 'styled-components';

interface TableProps {
    table: RouteTableInterface;
}

const RouteTable = styled.table`
    border: 1px solid black;
    border-collapse: collapse;
`;

const TableRow = styled.tr`
    border: 1px solid black;
    border-collapse: collapse;
    padding: 15px;
`;

const RoutesTable = (props: TableProps) => {
    console.log('Props', props);
    return (
        // <React.Fragment>Hi</React.Fragment>
        <RouteTable>
            <caption>{props.table.transportName}</caption>
            {props.table.routes.map(route => (
                <TableRow>
                    <td>{route.routeName}</td>
                    <td>{route.routeStops}</td>
                </TableRow>
            ))}
        </RouteTable>
    );
};

export default RoutesTable;
