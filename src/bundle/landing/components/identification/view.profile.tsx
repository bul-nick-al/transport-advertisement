import * as React from 'react';
import { listen } from 'fbjs/lib/EventListener';

import {
    ProfileStyled,
    UserPhoto,
    DropDownIcon,
    DropDownMenu,
    Item,
    Divider,
} from './styled';

export class Profile extends React.Component<any, any> {
    state: any = { dropdown: 'dd-hide' };
    constructor(props: any) {
        super(props);
    }

    handleBodyClick = ({ target: { offsetParent } }) => {
        if (offsetParent && offsetParent.id && offsetParent.id !== 'profile') {
            this.setState({ dropdown: 'dd-hide' });
        }
    };

    componentDidMount() {
        listen(window, 'click', this.handleBodyClick);
    }

    toogleDropDownMenu() {
        this.setState({
            dropdown: this.state.dropdown === 'dd-hide' ? 'dd-show' : 'dd-hide',
        });
    }

    render() {
        return (
            <ProfileStyled id="profile">
                <div onClick={() => this.toogleDropDownMenu()}>
                    <UserPhoto>
                        <img src={this.props.userphotourl} />
                    </UserPhoto>
                    <DropDownIcon />
                </div>
                <DropDownMenu className={this.state.dropdown}>
                    <Item>Личный кабинет</Item>
                    <Divider />
                    <Item>Комментарии</Item>
                    <Divider />
                    <Item>Выйти</Item>
                </DropDownMenu>
            </ProfileStyled>
        );
    }
}
