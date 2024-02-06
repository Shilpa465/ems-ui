
import './App.css';
import { BrowserRouter as Router, Route, Swtich} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
            <div className="container">
              <Switch> 
                <Route path = "/" component = {ListEmployeeComponent}></Route>
                <Route path ="/employees" component = {ListEmployeeComponent}></Route>
                <Route path = "/employees" component = {CreateEmployeeComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
        </div>
      </Router>
    </div>


  );
}

export default App;
