import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useContext } from "react";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/UserLogin";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import { UserDataContext } from "./context/UserContext";
function App() {
  const ans = useContext(UserDataContext);
  console.log(ans);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<UserSignup />}></Route>
        <Route path="/login" element={<UserLogin />}></Route>
        <Route path="/captain-signup" element={<CaptainSignup />}></Route>
        <Route path="/captain-login" element={<CaptainLogin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
