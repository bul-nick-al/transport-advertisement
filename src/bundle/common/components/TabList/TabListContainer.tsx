import { connect } from 'react-redux';
import * as React from 'react';
import { Tab } from './Tab';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export interface TabListPropsInterface {
    tabs: string[];
    activeTab: number;
    onTabClick?: (index: number) => void;
}

class TabListContainer extends React.Component<any, any> {
    constructor(props: TabListPropsInterface) {
        super(props);
        this.state = { activeTab: this.props.activeTab };
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(index: number): void {
        this.setState({ activeTab: index });
        if (this.props.onTabClick) {
            this.props.onTabClick(index);
        }
    }

    render(): React.ReactNode {
        return (
            <div>
                {this.props.tabs.map((tab: string, i: number) => (
                    <Tab
                        tab={tab}
                        index={i}
                        isActive={i === this.state.activeTab}
                        onClick={(index: number) => this.handleTabClick(index)}
                    />
                ))}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabListContainer);
