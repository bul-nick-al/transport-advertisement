import { connect } from 'react-redux';
import * as React from 'react';
import { Tab } from './Tab';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export interface TabListPropsInterface {
    tabs: string[];
    activeTab: number;
}

class TabListContainer extends React.Component<any, any> {
    constructor(props: TabListPropsInterface) {
        super(props);
        this.state = { activeTab: this.props.activeTab };
    }

    handleTabClick(index: number): void {
        this.setState({activeTab: index});
    }

    render(): React.ReactNode {
        return (
            <div>
                {this.props.tabs.map((tab: string, i: number) => (
                    <Tab
                        tab={tab}
                        index={i}
                        isActive={i === this.state.activeTab}
                        onClick={this.handleTabClick}
                    />))}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabListContainer);
