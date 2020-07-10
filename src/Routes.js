import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Lunara from './components/Character/Lunara';

class Routes extends React.Component {

    // 라우트 설정 참조
    // https://velog.io/@hwang-eunji/React-Route-%EA%B8%B0%EB%B3%B8%EC%84%A4%EC%A0%95

    render () {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/main' component={Main} />
                    <Route exact patg='/lunara' component={Lunara} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;