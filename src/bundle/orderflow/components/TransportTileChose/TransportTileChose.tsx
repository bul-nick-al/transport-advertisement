import * as React from 'react';
import styled from 'styled-components';
import CheckBox from '../../../common/components/CheckBox';

const Tile = styled.div`
    display: inline-block;
    border-width: 1px;
    border-color: rgb(230, 234, 238);
    border-style: solid;
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    width: 168px;
    flex-shrink: 0;
    height: 179px;
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
    font-family: 'ProximaNova';
    color: rgb(29, 37, 49);
    line-height: 2.5;
`;

const Desc = styled.span`
    font-size: 13px;
    font-family: 'ProximaNova';
    color: rgb(132, 140, 152);
    line-height: 1.846;
`;

const Radio = styled.input``;

class TransportTileChose extends React.Component<any, any> {
    render() {
        return (
            <Tile>
                <Image src={this.props.img} />
                <Name>{this.props.name}</Name>
                <Desc>Вместимость: малая</Desc>
                <label>
                    <CheckBox />
                </label>
            </Tile>
        );
    }
}

export default TransportTileChose;
