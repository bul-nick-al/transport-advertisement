import * as React from 'react';

export interface TabBarProps {}

export interface TabBarState {}

export default class TabBar extends React.Component<TabBarProps, TabBarState> {
    // state = { :  }
    render() {
        return (
            <div>
                <button>По районам</button>
                <button>По маршрутам</button>
            </div>
        );
    }
}
