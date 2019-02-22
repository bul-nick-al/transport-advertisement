import * as React from 'react';
import { connect } from 'react-redux';

import { FooterContainer } from './bundle/common/components/Footer';
import { HeaderContainer } from './bundle/common/components/Header';
import { BodyContainer } from './bundle/common/components/Body';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
  
    @import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');
    color: green;
    font-family: Roboto;
  }
`;

class Main extends React.PureComponent<any, any> {
    // componentDidMount() {}

    render() {
        return (
            <div>
                <GlobalStyle />
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
