import * as React from 'react';

export interface SegmentControlProps {
    segments: Segment[];
    setComponent: (component: any) => any;
}

export interface Segment {
    name: String;
    id: number;
}

const SegmentControl = (props: SegmentControlProps) => {
    return (
        <div>
            {props.segments.map(segment => (
                <button onClick={() => props.setComponent(segment.id)}>
                    {segment.name}
                </button>
            ))}
        </div>
    );
};
export default SegmentControl;
