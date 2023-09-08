import logo from "./logo.svg";
import "./App.css";
import ShoppingCart from "./Components/ShoppingCart";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <ShoppingCart />
      <Toaster/>
    </div>
  );
}

export default App;
