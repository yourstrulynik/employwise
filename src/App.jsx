import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./pages/Login"
import UsersList from "./pages/UsersList"
import EditUser from "./pages/EditUser"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path ="/" element={<Login/>}/>
          <Route path ="/users" element={<UsersList/>}/>
          <Route path="/edit-user/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
