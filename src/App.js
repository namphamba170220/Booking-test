import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './component/Header/index';
import AlbumFeature from './pages/Album/index';
import CounterFeature from './pages/Counter/index';
import ProductFeature from './pages/Product/index';
import TodoFeature from './pages/Todo/index';





function App() {


  return (
    <div className="App">
      <Header />
      <Switch>
          <Route path="/" component={ CounterFeature } exact></Route>
          <Route path="/todos" component={ TodoFeature }></Route>
          <Route path="/albums" component={ AlbumFeature }></Route>
          <Route path="/products" component={ ProductFeature }></Route>
        </Switch>
    </div>
  );
}

export default App;
