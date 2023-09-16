import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserList } from "./Data";
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from './UserReducer';

function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter(f => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setname] = useState(name);
  const [uemail, setemail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate('/');
  };

  return (
    <div>
      <div className="container">
        <h2>Update User</h2>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter your name"
              value={uname}
              onChange={e => setname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your email"
              value={uemail}
              onChange={e => setemail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;



