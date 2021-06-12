import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Menu from './component/Menu'
import routes from './routes'


function App() {
  return (
    <Router>
      <div className="App">
       <Menu/>
        <Switch>
          {showRoutes(routes)}
        </Switch>

      </div>
    </Router>
  );
}

const showRoutes = (routes) => {
  let result = null;
  if(routes.length > 0 ){
    result = routes.map((route,index) => {
      return (
        <Route path={route.path} exact={route.exact} component={route.main} />
      )
    })
  }
  return result;
}

export default App;
