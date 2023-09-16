import { createSlice } from '@reduxjs/toolkit';
import { UserList } from './Data';

const userSlice = createSlice({
  name: 'users',
  initialState: UserList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const uu = state.find(user => user.id == id);
      if (uu) {
        uu.name = name;
        uu.email = email;
        
      }
      
    },
    
    DeleteUser: (state, action) => {
      const { id } = action.payload;
      return state.filter(user => user.id !== id);
    }
    

  },
});

export const { addUser, updateUser,DeleteUser } = userSlice.actions;
export default userSlice.reducer;
