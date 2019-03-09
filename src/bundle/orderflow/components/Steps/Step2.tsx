import * as React from 'react';
import styled from 'styled-components';

import StepBar from '../../../common/components/StepBar';
import SegmentControl, {
    Segment,
} from '../../../common/components/SegmentControl';
import { Segment1, Segment2 } from './Segments';

const Body = styled.div`
    height: 100%;
`;

const segments: Segment[] = [
    { id: 1, name: 'По районам' },
    { id: 2, name: 'По маршрутам' },
];

const segmentComponents = {
    1: <Segment1 />,
    2: <Segment2 />,
};

class Step2 extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { currentSegmentId: 1 };
    }
    setSegment = (segmentId: number) => {
        this.setState({ currentSegmentId: segmentId });
        console.warn(segmentId);
    };
    render() {
        return (
            <Body>
                <StepBar
                    onClickBack={() => this.props.sendStateEvent('back')}
                    onClickNext={() => this.props.sendStateEvent('next')}
                />
                <SegmentControl
                    segments={segments}
                    setComponent={this.setSegment}
                />
                {this.state.currentSegmentId &&
                    segmentComponents[this.state.currentSegmentId]}
            </Body>
        );
    }
}
export default Step2;
