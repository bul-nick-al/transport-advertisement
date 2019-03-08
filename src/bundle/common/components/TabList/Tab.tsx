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
  border-bottom: ${props => (props.isActive ? '2px solid rgba(23, 146, 236, 1)' : '0px')}; 
  margin: 5px 10px;
  padding-bottom: 10px;
  display: inline-block;
  transition: 0.3s;
  cursor: pointer;
    &:hover {
      border-bottom: ${props => (
          props.isActive ? '2px solid rgba(23, 146, 236, 1)' 
              : '2px solid rgba(23, 146, 236, 0.3)')};
    }
  }
`;

export const Tab = (props: TabElementsProps) => {
    return (
        <TabContainer isActive={props.isActive} onClick={() => props.onClick(props.index)}>
            {props.tab}
    </TabContainer>
    );
};