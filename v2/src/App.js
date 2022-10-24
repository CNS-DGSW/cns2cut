import { Route, Routes } from "react-router-dom";
import Main from "./components/main"
import Result from "./components/result"

function App() {
  return (
    <Routes>
      <Route path="/" element={<from/>} ></Route>
      <Route path="/result" element={<Result/>} ></Route>
    </Routes>
  );
}

export default App;
