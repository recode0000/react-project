import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page01 } from "./Page01";
import { Page02 } from "./Page02";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page01">Page01</Link>
        <br />
        <Link to="/Page02">Page02</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="page01" element={<Page01 />} />
        <Route path="page02" element={<Page02 />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
