import Body from './Body';
import { connect } from 'react-redux';
import * as React from 'react';

import routes from '../../../orderflow/routes/orderflow';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { RegistrationContainer } from '../../../registration/components/Registration';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

class BodyContainer extends React.Component<any, any> {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Registration</Link>
                        </li>
                        <li>
                            <Link to="/orderflow">Order</Link>
                        </li>
                    </ul>
                    {routes}
                    <Body />
                    <Route exact path="/" component={RegistrationContainer} />
                </div>
            </Router>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BodyContainer);
