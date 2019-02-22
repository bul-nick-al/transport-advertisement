import * as React from 'react';

import styled from 'styled-components';
import { ChooseTilesContainer } from '../../../orderflow/components/ChooseTilesContainer';

const B = styled.div`
    background: #f8f9f9;
`;

export default class Body extends React.Component {
    render() {
        return (
            <B>
                Body
                <ChooseTilesContainer />
            </B>
        );
    }
}
