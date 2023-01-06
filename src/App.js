import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import GlobalState from "./Context/GlobalState";
import Home from "./Home/Home";
import HomePage from "./Home/HomePage";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/home" element={<HomePage />} />
          <Route index path="/login" element={<SignIn />} />
          <Route index path="/register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
