import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Termek from "./Termek";
import UjTermek from "./UjTermek";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
    <Routes>
      <Route path="/Termek" element={<Termek/>} />
      <Route path="/UjTermek" element={<UjTermek/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
