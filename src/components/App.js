import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./Homepage";
import ProductDetails from "./ProductDetails";
import AllProducts from "./AllProducts";
import "../css/App.css";
import Cart from "./Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Homepage} />
      <Route path="/product/:product_id" exact component={ProductDetails} />
      <Route path="/explore" exact component={AllProducts} />
      <Route path="/cart" exact component={Cart} />
    </BrowserRouter>
  );
};

export default App;
