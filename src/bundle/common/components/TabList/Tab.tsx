import * as React from 'react';
import { TabContainer } from './styles';

interface TabElementsProps {
    tab: string;
    index: number;
    isActive: boolean;
    onClick?: (index: number) => void;
}

export interface TabContainerProps {
    isActive: boolean;
}

export const Tab = (props: TabElementsProps) => {
    return (
        <TabContainer
            isActive={props.isActive}
            onClick={() => props.onClick(props.index)}
        >
            {props.tab}
        </TabContainer>
    );
};
