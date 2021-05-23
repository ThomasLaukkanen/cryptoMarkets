import './App.css'
import Home from './views/Home'
import Price from './views/Price'
import Nav from './components/Nav'
import CoinInfo from './views/CoinInfo'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" exact component={Home} />
          <Route path="/price" component={Price} exact />
          <Route path="/price/:id" component={CoinInfo} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
