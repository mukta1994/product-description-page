import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProductDesc from "./components/description/ProductDesc";
import Ugc from "./components/ugc/Ugc";
import Home from "./components/Home";
import Meta from "./components/meta/Meta";
import { Navbar, Nav, Container } from 'react-bootstrap';


function App() {

  const title = "1/1/OZWEEGO SHOES Green"

  return <div>
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Adidas</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Meta id={1}/>
    <Router>
      <Route exact path="/" >
        <Home title={title}/>
      </Route>
      <Route exact path="/product/:productid/:variantid/:title">
        <ProductDesc />
        <Ugc />
      </Route>
    </Router>
  </div>

}

export default App;
