import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";
import Home from "./Page/Home/Home";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
