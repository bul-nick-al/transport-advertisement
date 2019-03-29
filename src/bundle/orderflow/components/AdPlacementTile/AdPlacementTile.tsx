import * as React from 'react';
import styled from 'styled-components';
import Tile from '../../../common/components/Tile';
import { HeaderButton } from '../../../common/components/Buttons';
import { CustomSelect } from '../../../common/components/Select';

const Image = styled.img`
    margin: 15px 0 0 0;
`;

const Desc = styled.span`
    font-size: 13px;
    color: rgb(132, 140, 152);
`;

const ButtonContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 5px;
`;

class AdPlacementTile extends React.Component<any, any> {
    render() {
        return (
            <Tile width={'210px'}>
                <Image src={this.props.img} />
                <table>
                    <tr>
                        <td>Компания:</td>
                        <td>{this.props.company}</td>
                    </tr>
                    <tr>
                        <td>Количество месяцев:</td>
                        <td>
                            <CustomSelect />
                        </td>
                    </tr>
                    <tr>
                        <td>Количество ТС:</td>
                        <td>
                            <CustomSelect />
                        </td>
                    </tr>
                </table>
                <Desc>{this.props.comments}</Desc>
                <ButtonContainer>
                    <HeaderButton>В корзину</HeaderButton>
                </ButtonContainer>
            </Tile>
        );
    }
}

export default AdPlacementTile;
