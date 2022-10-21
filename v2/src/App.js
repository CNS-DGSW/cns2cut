import { Route, Routes } from "react-router-dom";
import MainPage from "./components/main"
import Result from "./components/result"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} ></Route>
      <Route path="/result" element={<Result/>} ></Route>
    </Routes>
  );
}

export default App;
