import * as React from 'react';
import styled from 'styled-components';
import CheckBox from '../../../common/components/Checkbox';
import Tile from '../../../common/components/Tile';

const Image = styled.img`
    margin: 15px 0 0 0;
`;

const Name = styled.p`
    font-size: 16px;
    color: rgb(29, 37, 49);
    line-height: 1;
`;

const Desc = styled.span`
    font-size: 13px;
    color: rgb(132, 140, 152);
`;

const CheckboxContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 5px;
`;

class TransportTileChose extends React.Component<any, any> {
    render() {
        return (
            <Tile width={'168px'}>
                <Image src={this.props.img} />
                <Name>{this.props.name}</Name>
                <Desc>Вместимость: малая</Desc>
                <CheckboxContainer>
                    <label>
                        <CheckBox checked={false} />
                    </label>
                </CheckboxContainer>
            </Tile>
        );
    }
}

export default TransportTileChose;
