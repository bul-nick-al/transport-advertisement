import Footer from './Footer';
import { connect } from 'react-redux';

import styled from 'styled-components';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const FooterStyled = styled(Footer)`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FooterStyled);
