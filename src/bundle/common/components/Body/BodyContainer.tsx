import { connect } from 'react-redux';
import * as React from 'react';
import styled from 'styled-components';

import StepBar from '../StepBar';
import { ChooseTilesContainer } from '../../../orderflow/components/ChooseTilesContainer';
import { BreadCrumbsContainer } from '../../../orderflow//components/BreadCrumbs';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const Body = styled.div`
    height: 100%;
`;

class BodyContainer extends React.Component<any, any> {
    render() {
        return (
            <Body>
                <StepBar />
                <BreadCrumbsContainer />
                <ChooseTilesContainer />
            </Body>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BodyContainer);
