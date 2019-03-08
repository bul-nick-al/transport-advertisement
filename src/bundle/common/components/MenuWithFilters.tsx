import * as React from 'react';
import styled from 'styled-components';
import CheckBox from '../../common/components/CheckBox';

interface MenuWithFiltersProps {
    regions: string[];
}

interface MenuWithFiltersState {}

const MenuContainer = styled.div`
    display: inline-block;
    border-width: 1px;
    border-color: rgb(230, 234, 238);
    border-style: solid;
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    width: 270px;
    flex-shrink: 0;
    -webkit-box-shadow: -5px 4px 67px -47px rgba(77, 77, 77, 0.73);
    -moz-box-shadow: -5px 4px 67px -47px rgba(77, 77, 77, 0.73);
    box-shadow: -5px 4px 67px -47px rgba(77, 77, 77, 0.73);
    margin: 15px 30px;
`;

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
    VarCheckBox = <CheckBox />;

    render() {
        return (
            <MenuContainer>
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
            </MenuContainer>
        );
    }
}

export default MenuWithFilters;
