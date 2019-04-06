import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import {
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FiveSection,
} from './components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  html, body {
    position: relative;
	  width: 100vw;
	  overflow-x: hidden !important;
  }
  
  @keyframes wave {
    50% {
      transform: scale(0.9);
    }
  }
`;

const Wrapper = styled.div`
    font-family: Segoe UI, Segoe, sans-serif;
`;

export class Landing extends React.PureComponent {
    render() {
        return (
            <Wrapper>
                <FirstSection {...this.props} />
                <SecondSection />
                <ThirdSection {...this.props} />
                <FourthSection />
                <FiveSection />
                <GlobalStyle />
            </Wrapper>
        );
    }
}
