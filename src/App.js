import "./App.css";
import Register from "./Pages/Register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
function App() {
  const { currentUser } = useContext(AuthContext);

  // console.log(currentUser);

  const ProtectedRoutes = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
