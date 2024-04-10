function userList({ users,editProduct,deleteProduct }) {
    return (
        <table className='table m-3 '>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((data) => (
                        <tr key={data.id} >
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.password}</td>

                            <td>
                                <button className='btn btn-primary m-1' onClick={() => editProduct(data)}>Edit</button>
                                <button className="btn btn-danger m-1" onClick={() => deleteProduct(data.id)}>Delete</button>
                            </td>
                             
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
 }

 export default userList