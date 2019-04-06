import * as React from 'react';
import { Logo } from '../logo';
import { Wrapper, Phone } from './styled';

export class FiveSection extends React.PureComponent {
    render() {
        return (
            <Wrapper>
                <Logo />
                <Phone>+78008886677</Phone>
            </Wrapper>
        );
    }
}
