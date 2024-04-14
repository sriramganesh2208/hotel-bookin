import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import './navbar.css'

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    // Implement any additional logout logic (e.g., clearing local storage)
  };

  const handleRegister = () => {
    // Dispatch the action for starting the registration process
    dispatch({ type: "REGISTER_START" });
    // Redirect the user to the registration page
    navigate("/register");
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between", padding: { xs: '0 10px', sm: '0 20px' } }}>
        <Typography variant="h6" component="div">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Booking
          </Link>
        </Typography>
        <div sx={{ display: 'flex', alignItems: 'center' }} className="first">
          {user ? (
            <>
              <Typography variant="subtitle1" sx={{ mr: { xs: 0, sm: 2 } }}>
                Welcome, {user.username}
              </Typography>
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={handleRegister}>Register</Button>
              <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
                <Button color="inherit">Login</Button>
              </Link>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
