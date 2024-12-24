import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";
import { ToastContainer } from "react-toastify";

import Layout from "./Page/Layout/Layout";
import Home from "./Page/Home/Home";
import QuestionsByCategory from "./Components/Feed/Question/QuestionsByCategory/QuestionsByCategory";
import PrivateRoute from "./PrivateRoute";
import TopQuestions from "./Components/Feed/Question/TopQuestions/TopQuestions";

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
                <Route path="/topquestions/:type" element={<TopQuestions />} />
                <Route
                  path="/topics/:category"
                  element={<QuestionsByCategory />}
                />
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
