import styled from 'styled-components';
import { TabContainerProps } from './Tab';

export const TabContainer = styled.div<TabContainerProps>`
  border-bottom: ${props =>
      props.isActive ? '2px solid rgba(23, 146, 236, 1)' : '0px'}; 
  margin: 5px 10px;
  padding-bottom: 10px;
  display: inline-block;
  transition: 0.3s;
  cursor: pointer;
    &:hover {
      border-bottom: ${props =>
          props.isActive
              ? '2px solid rgba(23, 146, 236, 1)'
              : '2px solid rgba(23, 146, 236, 0.3)'};
    }
  }
`;
