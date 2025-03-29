import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./userslist.css";
import logo from "../assets/Logo.svg";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const fetchUsers = async (pageNum) => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${pageNum}`
      );
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleEditClick = (user) => {
    navigate(`/edit-user/${user.id}`, { state: { user } });
  };

  const handleDeleteClick = async (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (confirmDelete) {
      try {
        await axios.delete(`https://reqres.in/api/users/${userId}`);
        setUsers(users.filter((user) => user.id !== userId));
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <div className="user-body">
      <div className="users-container">
        <img src={logo} alt="" className="userList-logo" />
        <div className="users-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img
                className="user-avatar"
                src={user.avatar}
                alt={user.first_name}
              />
              <h3 className="user-name">
                {user.first_name} {user.last_name}
              </h3>
              <p className="user-email">{user.email}</p>
              <div className="button-group">
                <button
                  className="edit-btn"
                  onClick={() => handleEditClick(user)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteClick(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination-controls">
          <button
            className="pagination-btn"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            <FaLongArrowAltLeft size={30} />
          </button>
          <span className="page-count">
            Page {page}/{totalPages}
          </span>
          <button
            className="pagination-btn"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            <FaLongArrowAltRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UsersList;
