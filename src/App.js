import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";

function App() {
  return (
    <div id="app-root" className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shoppage" element={<ShopPage />} />
        {/* <Route path="/detail/:id" component={Detail} /> */}
      </Routes>
    </div>
  );
}

export default App;
