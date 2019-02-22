import { connect } from 'react-redux';
import * as React from 'react';

import StepBar from '../StepBar';
import { ChooseTilesContainer } from '../../../orderflow/components/ChooseTilesContainer';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

class BodyContainer extends React.Component<any, any> {
    render() {
        return (
            <div>
                <StepBar />
                <ChooseTilesContainer />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BodyContainer);
