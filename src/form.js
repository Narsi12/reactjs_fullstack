import React, { useState } from "react";

function UserForm(props) {
    const [user, setUser] = useState(props.data);
    const [submitted, setSubmitted] = useState(false);

    const changeFormData = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <div className="form-overlay">
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        className="form-control mt-2"
                        value={user.name}
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        onChange={changeFormData}
                    />
                    {submitted && user.name.trim() === "" && (
                        <span className="text-danger">User name is required</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        className="form-control mt-2"
                        value={user.email}
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={changeFormData}
                    />
                    {submitted && user.email.trim() === "" && (
                        <span className="text-danger">User email is required</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        className="form-control mt-2"
                        value={user.password}
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={changeFormData}
                    />
                    {submitted && user.password.trim() === "" && (
                        <span className="text-danger">Password is required</span>
                    )}
                </div>

                {/* <button className="btn btn-primary float-end" onClick={handleSubmit}>Submit</button> */}

                <button className="btn btn-primary float-end"

                    onClick={(e) => {
                        setSubmitted(true)
                        e.preventDefault();
                        if (!!user.name && !!user.email && !!user.password) {
                            props.addUser(user)
                        }



                    }}

                >Send</button>

                <button className="btn btn-danger float-end"
                    onClick={(e) => {
                        e.preventDefault();
                        props.closeForm()
                    }}
                >Cancel</button>
                
            </form>
        </div>
    );
}

export default UserForm;
