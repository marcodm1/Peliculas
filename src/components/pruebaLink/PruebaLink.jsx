import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './PruebaLink.css';

const PruebaLink = () => {
  return (
    <>
    <p>PruebaLink</p>

    <Router>
      <Switch>
        <Route exact path='/prueba'> <p>estamos dentro</p></Route>
      </Switch>
    </Router>
    </>
  )
}
export default PruebaLink;