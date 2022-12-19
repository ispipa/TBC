import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/Components/Header/Header';
import ImagePage from './Components/Img/ImagePage';
import Bares from './Components/Bares/Bares';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Router>
            <Route exact path="/" component={Header} />
            <Route exact path="/about" component={ImagePage} />
            <Route component={Bares} />
        </Router>
      </BrowserRouter>
  );
}

export default App;
