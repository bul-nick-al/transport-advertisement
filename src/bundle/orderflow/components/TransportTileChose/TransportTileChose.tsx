import * as React from 'react';
import styled from 'styled-components';
import CheckBox from '../../../common/components/CheckBox';

const Tile = styled.div`
    display: block;
    border-width: 1px;
    border-color: rgb(230, 234, 238);
    border-style: solid;
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    width: 168px;
    flex-shrink: 0;
    height: auto;
    -webkit-box-shadow: -5px 4px 67px -47px rgba(77, 77, 77, 0.73);
    -moz-box-shadow: -5px 4px 67px -47px rgba(77, 77, 77, 0.73);
    box-shadow: -5px 4px 67px -47px rgba(77, 77, 77, 0.73);
    text-align: center;
    margin: 5px 10px;
`;

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
            <Tile>
                <Image src={this.props.img} />
                <Name>{this.props.name}</Name>
                <Desc>Вместимость: малая</Desc>
                <CheckboxContainer>
                    <label>
                        <CheckBox />
                    </label>
                </CheckboxContainer>
            </Tile>
        );
    }
}

export default TransportTileChose;
