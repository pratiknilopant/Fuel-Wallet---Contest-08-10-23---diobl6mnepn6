import { v4 as uuidv4 } from "uuid";

const initialState = {
    users: [],
    walletBalance: 0,
  };

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
          const newUser = {
            id: uuid(),
            name: action.payload.name,
            balance: 10,
          };
          return {
            ...state,
            users: [...state.users, newUser],
            walletBalance: state.walletBalance + 10,
          };
    
        case 'HANDLE_FUEL':
          if (state.walletBalance >= 50) {
            return {
              ...state,
              walletBalance: state.walletBalance - 50,
            };
          }
          return state;
    
        default:
          return state;
      }    
};

export default reducer;
