import * as React from 'react';
import { connect } from 'react-redux';
import { callRest } from './helpers';
import {
    AuthButton,
    AuthButtonReg,
    UserIconWithCircle,
    BestBuyIconWithCircle,
    IconGroup,
    UserPhoto,
    DropDownIcon,
} from './styled';

import { Profile } from './view.profile';

class Identification extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    async getClient() {
        let data = await callRest('/getClient');
        if (data) {
            this.setState({ person: data });
        }
    }

    async getUser() {
        let data = await callRest('/getUser');
    }

    componentWillMount() {
        this.getClient();
        // this.getUser();
    }

    renderClient() {
        let { messages, purchases, userphotourl } = this.state.person;
        return (
            <IconGroup>
                {messages && parseInt(messages, 10) > 0 && (
                    <UserIconWithCircle num={messages} />
                )}
                {purchases && parseInt(purchases, 10) > 0 && (
                    <BestBuyIconWithCircle
                        num={purchases}
                        onClick={() => this.props.goTocart()}
                    />
                )}
                {userphotourl && <Profile userphotourl={userphotourl} />}
            </IconGroup>
        );
    }

    renderNoClient() {
        return (
            <div>
                <AuthButton>Войти</AuthButton>
                <AuthButtonReg
                    onClick={() =>
                        this.props.openApp('identification.bundle.js')
                    }
                >
                    Регистрация
                </AuthButtonReg>
            </div>
        );
    }

    render() {
        let Component: any =
            (this.state && this.state.person && this.renderClient()) ||
            this.renderNoClient();
        return (
            (this.state.person && this.renderClient()) || this.renderNoClient()
        );
    }
}
const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: any) => ({
    goTocart: () => {
        dispatch(this.props.sendStateEvent('cart', { a: 1, b: '2' }));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Identification);
