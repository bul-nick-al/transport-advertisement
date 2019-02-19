import * as React from 'react';

export default class RegistrationStep1 extends React.Component {
    render() {
        return (
            <div className={'personalData'}>
                <div>Введите контактные данные</div>
                <div>Номер телефона</div>
                <input />
                <div>Имя</div>
                <input />
                <div>Email</div>
                <input />
            </div>
        );
    }
}
