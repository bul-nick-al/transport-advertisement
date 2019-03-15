import * as React from 'react';
import styled from 'styled-components';
import CheckBox from '../../common/components/CheckBox';
import Tile from '../../common/components/Tile';

interface MenuWithFiltersProps {
    regions: string[];
}

interface MenuWithFiltersState {}

const MenuTable = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

const MyCaption = styled.caption`
    color: #848c98;
    text-transform: uppercase;
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

class MenuWithFilters extends React.Component<
    MenuWithFiltersProps,
    MenuWithFiltersState
> {
    state = {};
    VarCheckBox = <CheckBox checked={false} />;

    render() {
        return (
            <Tile width={'270px'}>
                <MenuTable>
                    <MyCaption>
                        <p>Выбранные районы</p>
                    </MyCaption>
                    {this.props.regions.map(region => (
                        <TableRow>
                            <TableData>{region}</TableData>
                            <TableData>
                                <label>{this.VarCheckBox}</label>
                            </TableData>
                        </TableRow>
                    ))}
                </MenuTable>
            </Tile>
        );
    }
}

export default MenuWithFilters;
