import "./App.css";
import Headerr from "./components/Header";
import Main from "./components/Main-Body";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
// Importing Function

function App() {
  return (
    <div className="App">
      <Headerr />
      {/* Child components */}
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        {/* Child components */}
      </div>
    </div>
  );
}

export default App;
