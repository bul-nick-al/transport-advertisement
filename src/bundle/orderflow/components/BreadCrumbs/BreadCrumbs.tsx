import React from 'react';
import { BreadCrumb } from './interfaces';
import styled from 'styled-components';
import arrows from '../../../../assets/img/double-angle-pointing-to-right.svg';

interface BreadCrumbProps {
    breadCrumbs: BreadCrumb[];
}

const Container = styled.div`
    margin: 10px 5px;
    display: inline-block;
`;

const Crumb = styled.span<BreadCrumb>`
    display: inline-block;
    vertical-align: middle;
    color: ${props => (props.isActive ? '#848c98' : '#a6abb3')};
    display: inline-block;
    margin: 5px 10px;
`;

const Arrows = styled.img<BreadCrumb>`
    visibility: ${props => (props.isActive ? 'hidden' : 'visible')};
    width: 10px;
    height: auto;
`;

const BreadCrumbs = (props: BreadCrumbProps) => {
    return (
        <Container>
            {props.breadCrumbs.map(crumb => (
                <React.Fragment>
                    <Crumb {...crumb}>{crumb.name}</Crumb>
                    <Arrows src={arrows} {...crumb} />
                </React.Fragment>
            ))}
        </Container>
    );
};

export default BreadCrumbs;
