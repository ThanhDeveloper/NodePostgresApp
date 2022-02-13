import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import FormModal from "../../Shared/Modal";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function User() {
  const newUser = {
    name: "user X",
    age: 22,
  };

  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const hideModel = () => {
    setShowModal(false);
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  };

  useEffect(() => {
    axios
      .get("api/v1/users")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  const openModalUser = (user) => {
    setCurrentUser(user);
    setShowModal(true);
  };

  const addUser = () => {
    axios
      .post("api/v1/users", newUser)
      .then((response) => {
        const newList = users.concat(response.data.data);
        setUsers(newList);
        setOpenSnackBar(true);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const deleteUser = (id) => {
    axios
      .delete(`api/v1/users/${id}`)
      .then((response) => {
        setUsers(users.filter((user) => user.id !== id));
        setOpenSnackBar(true);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <>
      <h1>Manage User</h1>
      <FormModal isHidden={showModal} onClose={hideModel} user={currentUser} />
      <Button variant="primary" onClick={() => addUser()}>
        Add new user
      </Button>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>
                <Button variant="primary" onClick={() => openModalUser(user)}>
                  Update
                </Button>
                <Button variant="danger" onClick={() => deleteUser(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          success
        </Alert>
      </Snackbar>
    </>
  );
}

export default User;
