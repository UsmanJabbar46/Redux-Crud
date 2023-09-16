import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { UserList } from "./Data";
import { Link,} from 'react-router-dom';
import { DeleteUser } from './UserReducer';

function Home() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const handleDelete=(id)=>{

          dispatch( DeleteUser({id:id}) )
    }
   
  return (
    <div className='container'>
      <h2>Crud App</h2>
      <Link to ="/create"  className="btn btn-primary">Create +</Link>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to ={`/edit/${user.id}`} className="btn btn-secondary">Edit</Link>
                <button onClick={()=>handleDelete(user.id)} type="button" className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
