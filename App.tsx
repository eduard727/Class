import React from 'react';
import { Home } from './Home';
import { Switch,BrowserRouter, Route } from 'react-router-dom';
import { About } from './About';
import { MyTodoList } from './MyTodoList';
import { NotFound } from './404';
import { Nav } from './Nav';

const App: React.FC = () => {
  
  return <>
    <BrowserRouter>
    <Nav/>
      <Switch>
        <Route path='/' exact >
          <Home/>
        </Route>
        <Route path='/about' exact >
          <About/>
        </Route>
        <Route path='/todo/:todoSlug'>
          <MyTodoList/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  </>//fin del return
}

export default App;