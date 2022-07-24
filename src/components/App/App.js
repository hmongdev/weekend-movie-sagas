import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';

function App() {
    return (
        <div className="App">
            <h1>The Movies Saga!</h1>
            <Router>
                <Route exact path="/" component={MovieList} />
                {/* Details page */}
                <Route exact path="/details/:id" component={Details} />
                {/* Add Movie page */}
                {/* <Route exact path="/addmovie" component={AddMovie} /> */}
            </Router>
        </div>
    );
}

export default App;
