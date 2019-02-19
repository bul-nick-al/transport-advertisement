import * as React from 'react';
import { connect } from 'react-redux';

import { FooterContainer } from './bundle/common/components/Footer';
import { HeaderContainer } from './bundle/common/components/Header';
import { BodyContainer } from './bundle/common/components/Body';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import routes from './bundle/orderflow/routes/orderflow';

class Main extends React.PureComponent<any, any> {
    // componentDidMount() {}

    render() {
        return (
            <div>
                <HeaderContainer />
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/orderflow">Order</Link>
                            </li>
                        </ul>
                        {routes}
                        <Route exact path="/" component={BodyContainer} />
                    </div>
                </Router>
                <FooterContainer />
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const connectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
const reducers = 'reducer';
connectedApp[reducers] = (state = { hi: 'beach' }, action) => state;

export default connectedApp;
