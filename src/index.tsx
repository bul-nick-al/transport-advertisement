import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class Main extends React.PureComponent <any, any> {

    // componentDidMount() {}

    Dashboard = ({match}) => {
        console.warn(match);
        return (
            <div>
                <div>
                    Hi, {match.params[0] ? match.params[0] as string : 'pupsik'}
                </div>
                <button onClick={() => this.props.openApp('defaultapp')}>открыть другое приложение</button>
            </div>);
    }

    render () {
        return (
            <Router>
                <div>
                    <aside>
                        <Link to={`/dashboard/6`}>Dashboard</Link>
                        <Link to={`/about/5`}>About</Link>
                    </aside>
                    <Route exact={true} path="/" component={this.Dashboard} />
                    <Route path="/(about|dashboard)/:id" component={this.Dashboard} />
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Main);
const reducers = 'reducer';
connectedApp[reducers] = (state = {hi: 'beach'}, action) => state;

export default connectedApp;
