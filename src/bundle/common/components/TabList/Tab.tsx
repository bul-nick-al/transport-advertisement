import * as React from 'react';
import styled from 'styled-components';

interface TabElementsProps {
    tab: string;
    index: number;
    isActive: boolean;
    onClick?: (index: number) => void;
}

interface TabContainerProps {
    isActive: boolean;
}

export const TabContainer = styled.div<TabContainerProps>`
  border-bottom: ${props => (props.isActive ? '2px solid #1A91EC' : '0px')}; 
  margin: 0 10px;
  display: inline-block;
`;

export const Tab = (props: TabElementsProps) => {
    return (
        <TabContainer isActive={props.isActive} onClick={() => this.props.onClick(this.props.index)}>
            {props.tab}
    </TabContainer>
    );
};