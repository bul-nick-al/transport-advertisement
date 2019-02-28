import BreadCrumbs from './BreadCrumbs';
import { connect } from 'react-redux';
import * as React from 'react';
import { BreadCrumb } from './interfaces';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const mockedBreadCrumbs: BreadCrumb[] = [
    {
        name: 'Главная',
        action: () => console.warn('Главная has been clicked'),
        isActive: false,
    },
    {
        name: 'Реклама на транспорте',
        action: () => console.warn('Реклама на транспорте has been clicked'),
        isActive: false,
    },
    {
        name: 'Оформаление заказа',
        action: () => console.warn('Оформаление заказа has been clicked'),
        isActive: false,
    },
];

class BreadCrumbsContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return <BreadCrumbs breadCrumbs={mockedBreadCrumbs} />;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BreadCrumbsContainer);
