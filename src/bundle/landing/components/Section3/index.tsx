import * as React from 'react';
import { Wrapper, ContentBlock, AppButton, StyledNav } from './styled';

import { lift, radio, transport } from '../../assets';

export class ThirdSection extends React.PureComponent <any, any>{
  openAPP = (e, app) => {
    e.preventDefault();
    this.props.openApp(app);
  }

  render() {
    return (
      <Wrapper>
        <ContentBlock>
          <StyledNav>
            <AppButton href="#" onClick={(e) => this.openAPP(e, 'radio/radioapp')}>
              <img src={radio} />
              <div className="blueOne">реклама</div>
              <div>на радио</div>
            </AppButton>
            <AppButton href="#" onClick={(e) => this.openAPP(e, 'elevators/elevators')}>
              <img src={lift} />
              <div className="blueOne">реклама</div>
              <div>в лифтах</div>
            </AppButton>
            <AppButton href="#" onClick={(e) => this.openAPP(e, 'transport/transportadvapp')}>
              <img src={transport} />
              <div className="blueOne">реклама</div>
              <div>на транспорте</div>
            </AppButton>
          </StyledNav>
        </ContentBlock>
      </Wrapper>
    );
  }
}
