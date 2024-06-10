import Apps from './components/Apps'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'
import Setting from './components/Setting'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Apps} />
      <Route exact path="/project" component={Home} />
      <Route exact path="/widget" component={About} />
      <Route exact path="/deploy" component={Service} />
      <Route exact path="/pricing" component={Contact} />
      <Route exact path="/setting" component={Setting} />
    </Switch>
  </BrowserRouter>
)
export default App
