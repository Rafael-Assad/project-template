import {Routes as Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

const Routes = () => {
  return (
    <Switch>
      <Route path='/'
        element={ <Home/> }
      />

      <Route path='/about'
        element={ <About/> }
      />
    </Switch>
  )
}

export default Routes