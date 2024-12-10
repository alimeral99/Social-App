import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";
import { ToastContainer } from "react-toastify";

import Layout from "./Page/Layout/Layout";
import Home from "./Page/Home/Home";
import TopicsQuestions from "./Components/Feed/Question/TopicsQuestions/TopicQuestions";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer
          position={window.innerWidth < 728 ? "bottom-center" : "top-center"}
        />

        <div className="app-body">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="topics/:category" element={<TopicsQuestions />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
