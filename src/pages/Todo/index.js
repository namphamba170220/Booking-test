import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './pages/DetaiPage/index';
import ListPage from './pages/ListPage/index';



TodoFeature.propTypes = {};

function TodoFeature(props) {
    const match = useRouteMatch();
    return (
       
        <div>
            TODO SHARED UI
            <Switch>
                <Route path={match.path} component={ListPage} exact></Route>
                <Route path={`${match.path}/:todoId`} component={DetailPage}></Route>
            </Switch>
        </div>
    );
}

export default TodoFeature;