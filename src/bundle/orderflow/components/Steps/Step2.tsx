import * as React from 'react';
import styled from 'styled-components';

import StepBar from '../../../common/components/StepBar';
import { Segment1 } from './Segments';
import { TabListContainer } from '../../../common/components/TabList';
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
        this.state = { currentSegmentId: 0 };
        this.setSegment = this.setSegment.bind(this);
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
                <TabListContainer tabs={['По районам', 'По маршрутам']} activeTab={this.state.currentSegmentId} onTabClick={this.setSegment}/>
                {segmentComponents[this.state.currentSegmentId]}
            </Body>
        );
    }
}
export default Step2;
