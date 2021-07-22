import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProductDesc from "./components/description/ProductDesc";
import Ugc from "./components/ugc/Ugc";
import Home from "./components/Home";
import Meta from "./components/meta/Meta";



function App() {

  // const Metadata = gql`
  //   {
  //     metadata(pid:1) {
  //       pid
  //       title
  //       desc
  //     }
  //     }
  // `;
  const title = "1/1/OZWEEGO SHOES Green"
  // const { loading, error, data } = useQuery(Metadata);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
  return <div>

    {/* <Helmet>
      <meta charSet="utf-8" />
      <title>{data.metadata.title}</title>
      <meta
        name="description"
        content={data.metadata.desc}
      />
    </Helmet> */}
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
