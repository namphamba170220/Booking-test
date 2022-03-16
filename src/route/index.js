import { Route, Switch } from "react-router-dom";
import SignIn from "../component/Modal/SignIn";
import SignUp from "../component/Modal/SignUp";
import AlbumFeature from "../pages/Album";
import Homepage from "../pages/HomePage";
import TodoFeature from "../pages/Todo";


export const RouteConfig = {
    initialRoute :`/homepage`,
    dashboard :'/dasboard',
    todos : '/todos',
    albums :'/albums',
    signinURL : '/signin',
    signupURL : '/signup',
};

function Routers() {
    return (
        <Switch>
            <Route path={RouteConfig.initialRoute} exact component={Homepage}/>
            <Route path={RouteConfig.albums} component={AlbumFeature}/>
            <Route path= {RouteConfig.todos} component={TodoFeature}/>
            {/* <Route path={RouteConfig.signinURL} component={SignIn}/> */}
            {/* <Route path={RouteConfig.signupURL} component={SignUp}/> */}
            {/* <Route path="*" component={pageError}/> */}
        </Switch>
    );
  }
  
  export default Routers;

    