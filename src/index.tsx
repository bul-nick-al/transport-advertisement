import * as React from 'react';
import { connect } from 'react-redux';

import { FooterContainer } from './bundle/common/components/Footer';
import { HeaderContainer } from './bundle/common/components/Header';
import { BodyContainer } from './bundle/common/components/Body';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    background: #eff3f6;
  }
`;

class Main extends React.PureComponent<any, any> {
    render() {
        return (
            <div>
                <GlobalStyle />
                <HeaderContainer
                    openApp={this.props.openApp}
                    exitApp={this.props.exitApp}
                />
                <BodyContainer {...this.props} />
                <FooterContainer {...this.props} />
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
