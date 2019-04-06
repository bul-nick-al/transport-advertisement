import * as React from 'react';

import { StyledLogo } from './styled';

export class Logo extends React.PureComponent {
    render() {
        return (
            <StyledLogo>
                <div>
                    <div className="desktop">
                        <span className="media">MEDIA</span>
                        <span className="pult">PULT</span>
                    </div>
                    <div className="desktop desc">
                        Агрегатор оффлайн рекламы
                    </div>
                    <div className="mobile">
                        <span className="media">M</span>
                        <span className="pult">P</span>
                    </div>
                </div>
            </StyledLogo>
        );
    }
}
