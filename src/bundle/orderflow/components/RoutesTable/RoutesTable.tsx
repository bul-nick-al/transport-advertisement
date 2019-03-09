import * as React from 'react';
import { RouteTableInterface } from './interfaces';

import styled from 'styled-components';
import CheckBox from '../../../common/components/CheckBox';

const TableContainer = styled.div`
    display: inline-block;
    border-width: 1px;
    border-color: rgb(230, 234, 238);
    border-style: solid;
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    width: 400px;
    flex-shrink: 0;
    -webkit-box-shadow: -5px 4px 67px -47px rgba(77, 77, 77, 0.73);
    -moz-box-shadow: -5px 4px 67px -47px rgba(77, 77, 77, 0.73);
    box-shadow: -5px 4px 67px -47px rgba(77, 77, 77, 0.73);
    margin: 15px 30px;
`;

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

    VarCheckBox = <CheckBox />;
    render() {
        return (
            <TableContainer>
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
            </TableContainer>
        );
    }
}

export default RoutesTable;
