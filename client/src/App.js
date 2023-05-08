
import { Button } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./pages/styles/theme.css";
import "./pages/styles/layout.css";
import Login from "./pages/employees/Login";
import Home from "./pages/Home"
import Register from "./pages/employees/Register";

function App() {
  return (
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/login"
            element={ 
                <Login />
            }
          />
          <Route
            path="/register"
            element={
                <Register />
            }
          />
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
