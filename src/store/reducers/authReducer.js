import * as types from '../actions/actionTypes';

const initialState = {
  authUser: null,
  isLoading: false,
  userId: null,
  msg: null,
  users: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
   
    default:
      return state;
  }
};

export default userReducer;
