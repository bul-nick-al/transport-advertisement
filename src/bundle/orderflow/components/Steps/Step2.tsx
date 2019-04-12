import * as React from 'react';
import styled from 'styled-components';

import StepBar from '../../../common/components/StepBar';
import { TabListContainer } from '../../../common/components/TabList';
import { Segment1, Segment2 } from './Segments';

const Body = styled.div`
    height: 100%;
`;

const segmentComponents = {
    0: <Segment1 />,
    1: <Segment2 />,
};

class Step2 extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { currentSegmentId: 0 };
        this.setSegment = this.setSegment.bind(this);
    }
    setSegment = (segmentId: number) => {
        this.setState({ currentSegmentId: segmentId });
    };
    render() {
        return (
            <Body>
                <StepBar
                    onClickBack={() => this.props.sendStateEvent('back')}
                    onClickNext={() => this.props.sendStateEvent('next')}
                    activeStep={1}
                />
                <TabListContainer
                    tabs={['По районам', 'По маршрутам']}
                    activeTab={this.state.currentSegmentId}
                    onTabClick={this.setSegment}
                />
                {segmentComponents[this.state.currentSegmentId]}
            </Body>
        );
    }
}
export default Step2;
