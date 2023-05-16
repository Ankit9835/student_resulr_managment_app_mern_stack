
import { Button } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./pages/styles/theme.css";
import "./pages/styles/layout.css";
import Login from "./pages/employees/Login";
import Home from "./pages/Home"
import Register from "./pages/employees/Register";
import { Toaster } from "react-hot-toast";
import EmployeeHome from "./pages/employees/EmployeeHome";
import ProtectectedRoute from "./components/ProtectectedRoute";
import AddStudent from "./pages/employees/AddStudent";
import Student from "./pages/employees/Student";
import DefaultLayout from "./components/DefaultLayout";

function App() {
  return (
    <div className="App">
    <Toaster />
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

          <Route
            path="/employee"
            element={
               <ProtectectedRoute>
                <EmployeeHome />
               </ProtectectedRoute> 
            }
          />

          <Route
            path="/employee/students"
            element={
              <ProtectectedRoute>
                <DefaultLayout>
                <Student />
                </DefaultLayout>
              </ProtectectedRoute>
            }
          />
          <Route
            path="/employee/students/add"
            element={
              <ProtectectedRoute>
                <DefaultLayout>
                <AddStudent />
                </DefaultLayout>
              </ProtectectedRoute>
            }
          />
          
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
