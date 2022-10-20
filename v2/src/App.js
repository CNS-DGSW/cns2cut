import { Route, Routes } from "react-router-dom";
import MainPage from "./components/main"
import TakedPage from "./components/taked"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} ></Route>
      <Route path="/" element={<TakedPage/>} ></Route>
    </Routes>
  );
}

export default App;
