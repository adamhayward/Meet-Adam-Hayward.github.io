// import React from "react";
// import { HashRouter as  Switch, Route } from "react-router-dom";

// import Home from "./components/pages/Home";

// import Resume from "./components/pdf/resume";

// import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/esm/Container";

// function App() {
//   return (

//       <Container>
//         <Switch>
//           <Route
//             path={["/", `/home`]}
//             exact
//             component={Home}
//           />
//           <Route
//             path={`/resume`}
//             exact
//             component={Resume}
//           />
//         </Switch>
//       </Container>
//   );
// }

// export default App;

import React, { Component } from 'react';
// import { HashRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter as Router, Route} from "react-router-dom";

import Home from "./components/pages/Home";
import Resume from "./components/pdf/resume";

import Container from "react-bootstrap/esm/Container";
class App extends Component {
  render() {
    return (
      <Router basename="/">
        <Container>
          <Route  exact path={["/", `/home`]} component={Home} />
          <Route path="/resume" component={Resume} />
        </Container>
      </Router>
    );
  }
}

export default App;
