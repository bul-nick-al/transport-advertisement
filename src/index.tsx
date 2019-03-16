import * as React from 'react';
import { connect } from 'react-redux';

import { FooterContainer } from './bundle/common/components/Footer';
import { HeaderContainer } from './bundle/common/components/Header';
import { BodyContainer } from './bundle/common/components/Body';

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background: #eff3f6;
    font-family: 'Open Sans', sans-serif;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between
  }
`;

const Wrapper = styled.div`
    min-height: 100vh;
    margin-bottom: -161px;
    padding-bottom: 161px;
`;

class Main extends React.PureComponent<any, any> {
    render() {
        return (
            <div>
                <GlobalStyle />
                <Wrapper>
                    <HeaderContainer
                        openApp={this.props.openApp}
                        exitApp={this.props.exitApp}
                    />
                    <BodyContainer {...this.props} />
                </Wrapper>
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
