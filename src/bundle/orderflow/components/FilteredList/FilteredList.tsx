import * as React from 'react';

export interface FilteredListProps {}

export interface FilteredListState {
    listElements: [];
}

class FilteredList extends React.Component<any, any> {
    state = {
        listElements: [
            { id: 0, value: 'Элемент 1', state: 'chosen' },
            { id: 1, value: 'Элемент 2', state: 'chosen' },
            { id: 2, value: 'Элемент 3', state: 'disabled' },
            { id: 3, value: 'Элемент 4', state: 'disabled' },
        ],
    };
    render() {
        return (
            <div>
                <ul>
                    {this.state.listElements.map(e => (
                        <li key={e.id}>{e.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default FilteredList;
