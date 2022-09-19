import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Filming from "./pages/filming/Filming";
import Main from "./pages/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="*" element={<Filming />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
