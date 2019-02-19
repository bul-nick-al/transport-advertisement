import { connect } from 'react-redux';
import * as React from 'react';

import { Stepper } from '../../../common/components/Stepper';
import RegistrationStep1 from './RegistrationStep1';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const Link = ({ className, children }) => (
    <a className={className}>{children}</a>
);

export default class RegistrationContainer extends React.Component {
    render() {
        return (
            <div>
                <Stepper />
                <RegistrationStep1 />
            </div>
        );
    }
}

const connectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationContainer);
