import { connect } from 'react-redux';
import * as React from 'react';

import { Step1, Step2, Step3 } from '../../../orderflow/components/Steps/';
import { CustomSelect } from '../Select';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const processes = {
    transportFlow: {
        transportForm1: Step1,
        transportForm2: Step2,
        transportForm3: Step3,
    },
};

class BodyContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.initFlow({
            flowName: 'transportFlow',
            url: 'transport-bh',
        });
    }

    render() {
        let { flowName, stateName, isLoading, status } = this.props;

        let Component;
        if (flowName && stateName) {
            Component = processes[flowName][stateName];
        }
        return <div>{Component && <Component {...this.props} />}</div>;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BodyContainer);
