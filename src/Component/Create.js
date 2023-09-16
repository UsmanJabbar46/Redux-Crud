import React,{useState} from 'react'
import { addUser } from './UserReducer';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Create() {
    const[name,setname] = useState('');
    const[email,setemail]= useState('');
  
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate= useNavigate();

    
    const handleSubmit = e => {
      e.preventDefault();
      const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
      dispatch(addUser({ id: newId, name, email }));
      navigate('/');
    };
    


  return (
    <div>
      <div className="container">
      <h2>Add new user</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text"  className="form-control" name="name" placeholder="Enter your name" onChange={e=>setname(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" name="email" placeholder="Enter your email" onChange={e=>setemail(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
</div>

)
  }
  

export default Create

