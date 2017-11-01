import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const About = (props) => {
  console.log(props);
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">About</Link>
    </div>
  )
}

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      {/*<Route path="/about" render={() => <h1>About</h1>} />*/}
      <Route path="/about"
             children={({match}) => match && <About />} />
    </div>
  </Router>
)

export default App;
