import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./edituser.css";
import logo from "../assets/Logo.svg";

function EditUser() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state;

  const [formData, setFormData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`https://reqres.in/api/users/${user.id}`, formData);
      alert("User updated successfully!");
      navigate("/users");
    } catch (error) {
      alert("Failed to update user.");
    }
  };

  const handleCancelEdit = () => {
    navigate("/users");
  };

  return (
    <div className="edit-body">
      <div className="edit-container">
        <img src={logo} alt="" className="edituser-logo" />
        <img src={user.avatar} alt={user.first_name} className="user-avatar" />
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleCancelEdit} className="cancel-btn">
          Cancel Edit
        </button>
      </div>
    </div>
  );
}

export default EditUser;
