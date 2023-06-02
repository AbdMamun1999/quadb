import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import SingleShow from "./pages/SingleShow";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shows/:showId" element={<SingleShow />} />
    </Routes>
  );
}

export default App;
