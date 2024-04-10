import React, { useEffect, useState } from "react";
import { getData, postData, putData ,deleteData} from './api';
import UsersList from "./table";
import UserForm from "./form";

const App = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [edit, setEdit] = useState(false);
    const [openForm, setOpenForm] = useState(false);

    useEffect(() => {
        getAllUsers();
    }, []);

    async function getAllUsers() {
        try {
            const response = await getData();
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    async function addUser(user) {
        let data = {
            name: user.name,
            email: user.email,
            password: user.password
        };
        if (edit) {
            await putData(user.id, data);
        } else {
            await postData(data);
        }
        getAllUsers();
        setOpenForm(false);
    }

    async function deleteProduct(id) {
      const confirmed = window.confirm("Are you sure you want to delete this user?");
      if (confirmed) {
          await deleteData(id);
          getAllUsers();
      }
    }
  

    function editProduct(value) {
        setEdit(true);
        setOpenForm(true);
        setFormData(value);
    }

    function closeForm() {
        setOpenForm(false);
    }

    function showForm() {
      setFormData({ name: '', email: 'example@gmail.com', password: '' }); // Reset form data to empty values
      setOpenForm(true);
      setEdit(false);
  }
  

    return (
        <div className="wrapper m-5 w-50">
            <button className="btn btn-primary float-end" onClick={showForm}>Add New</button>
            <h2 className="text-primary text-center">CRUD Operations with React JS</h2>
            <UsersList users={users} editProduct={editProduct}  deleteProduct={deleteProduct} />

            {openForm && <UserForm addUser={addUser} data={formData} closeForm={closeForm} />}
        </div>
    );
};

export default App;
