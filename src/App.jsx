import "./App.css";
import { Route, Routes } from "react-router-dom";
import User from "./components/user/User";

function App() {
  return (
    <Routes>
      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default App;
