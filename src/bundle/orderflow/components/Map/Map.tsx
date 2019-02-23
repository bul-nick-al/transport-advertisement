import * as React from 'react';

export interface MapProps {}

export interface MapState {}

export default class Map extends React.Component<MapProps, MapState> {
    // state = { :  }
    render() {
        return (
            <div>
                <img
                    src="src/bundle/orderflow/components/Map/maxresdefault.jpg"
                    alt="Я Карта"
                />
            </div>
        );
    }
}
