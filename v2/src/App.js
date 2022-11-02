import { Route, Routes } from "react-router-dom";
import Main from "./components/main/Main"
import Result from "./components/result/Result"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>} ></Route>
      <Route path="/result" element={<Result/>} ></Route>
    </Routes>
  );
}

export default App;
