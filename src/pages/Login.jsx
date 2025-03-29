import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import logo from "../assets/Logo.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (!email || !password) {
      setError("Email and Password are required!");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      navigate("/users");
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="login-body">
      <div className="form-container">
        <img src={logo} alt="" className="login-logo" />

        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}

          <div className="input-container">
            <div className="input-item">
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email Address (eve.holt@reqres.in)"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-item">
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password (cityslicak)"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button className="submit-btn" type="submit">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
