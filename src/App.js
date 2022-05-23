import { Routes, Route, BrowserRouter } from "react-router-dom";
import Add from "./Add";
import Read from "./Read";
import Edit from "./Edit";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
