import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/auth/Auth";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import { Todo } from "./pages/home/Todo";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />}>
        <Route index path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="/" element={<Todo />}></Route>
    </Routes>
  );
}

export default App;
