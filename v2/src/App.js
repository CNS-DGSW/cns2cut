import { Route, Routes } from "react-router-dom";
import * as A from "./App.style"
import MainPage from "./pages/main"
import TakedPage from "./pages/taked"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} ></Route>
      <Route path="/" element={<TakedPage/>} ></Route>
    </Routes>
  );
}

export default App;
