import * as React from 'react';
import { RouteTableInterface } from './interfaces';

import styled from 'styled-components';
import CheckBox from '../../../common/components/CheckBox';
import Tile from '../../../common/components/Tile';

const RouteTable = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

const TableData = styled.td`
    vertical-align: center;
    padding: 15px;
    border-bottom: 1px solid #ddd;
`;

const TableRow = styled.tr`
    padding: 15px;
    height: 30px;
    border-bottom: 1px solid #ddd;
    ${TableData}:first-child {
        font-size: 15px;
    }
    ${TableData}:nth-child(2) {
        font-size: 13px;
        color: #848c98;
    }
`;

interface TableProps {
    table: RouteTableInterface;
}

interface ChosenRoute {
    id: number;
    name: string;
}

class RoutesTable extends React.Component<TableProps, any> {
    constructor(props: TableProps) {
        super(props);

        this.state = {
            chosenRoutes: [],
        };
    }

    VarCheckBox = <CheckBox checked={false} />;
    render() {
        return (
            <Tile width={'400px'}>
                <RouteTable>
                    <caption>
                        <h2>{this.props.table.transportName}</h2>
                    </caption>
                    {this.props.table.routes.map(route => (
                        <TableRow>
                            <TableData>{route.routeName}</TableData>
                            <TableData>{route.routeStops}</TableData>
                            <TableData>
                                <label>{this.VarCheckBox}</label>
                            </TableData>
                        </TableRow>
                    ))}
                </RouteTable>
            </Tile>
        );
    }
}

export default RoutesTable;
