import * as React from 'react';
import { connect } from 'react-redux';

import { FooterContainer } from './bundle/common/components/Footer';
import { HeaderContainer } from './bundle/common/components/Header';
import { BodyContainer } from './bundle/common/components/Body';

import styled from 'styled-components';

class Main extends React.PureComponent<any, any> {
    // componentDidMount() {}

    render() {
        return (
            <div>
                <HeaderContainer />
                <BodyContainer />
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
