import * as React from 'react';
import { connect } from 'react-redux';

class Main extends React.PureComponent <any, any> {

    componentDidMount(){

    }

    render () {
        return (
            <div>
                <div>
                    Hi, beach
                </div>
                <button onClick={() => this.props.openApp('defaultapp')}>открыть другое приложение</button>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Main);
const reducers = 'reducer';
connectedApp[reducers] = (state = {hi: "beach"}, action) => state;

export default connectedApp;
