import * as React from 'react';
import styled from 'styled-components';

import StepBar from '../../../common/components/StepBar';
import SegmentControl, {
    Segment,
} from '../../../common/components/SegmentControl';

const Body = styled.div`
    height: 100%;
`;

const segments: Segment[] = [
    { id: 1, name: 'По районам' },
    { id: 2, name: 'По маршрутам' },
];

const segmentComponents = {
    1: <div>По районам</div>,
    2: <div>По маршрутам</div>,
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
