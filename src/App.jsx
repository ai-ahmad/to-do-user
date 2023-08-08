// style
import "./App.css";
// components
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Foter.jsx";
import UserList from "./components/userList/UserList.jsx";
import UserForm from "./components/newUser/Form.jsx";
import { useState } from "react";
// pages
function App() {
  const [users, setuser] = useState([]);
  const [modal, setModal] = useState(false);

  // delit user
  function deliUser(id) {
    const filtered = users.filter((item) => {
      return item.id !== id;
    });
    setuser(filtered);
  }

  function ModalClose(e) {
    if (e.target.className === "overlay") {
      setModal(false);
    } else if (e.keyCode === 27) {
      setModal(false);
    }
  }

  // add users
  function addItem(user) {
    console.log(user);
    setuser((newUser) => {
      return [...newUser, user];
    })
    setModal(false);
  }

  return (
    <div className="App" onClick={ModalClose} onKeyDown={ModalClose}>
      <Navbar usersNumber={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList Users={users} deliUser={deliUser} />
      </main>
      {modal && <UserForm modal={ModalClose} addItem={addItem} />}

      <button
        className="create-user"
        onClick={() => {
          setModal(true);
        }}
      >
        Create User
      </button>
      <Footer />
    </div>
  );
}

export default App;

// {
//   id: 2,
//   image: "https://miro.medium.com/v2/resize:fit:1400/0*uCkqhr0sJT6wRbwz",
//   firstName: "Ahmad",
//   lastName: "Ahmedov",
//   age: "13",
//   from: "Uzbekistan",
//   job: "Frontent Developer",
//   gender: "Male",
// }
