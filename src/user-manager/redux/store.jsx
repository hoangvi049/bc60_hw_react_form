import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    stateUserForm: (
      state = { id: "", name: "", email: "", phone: "" },
      action
    ) => {
      switch (action.type) {
        case "CHANGE_FORM":
          return (state = action.payload);
        default:
          return { ...state };
      }
    },

    stateUserList: (
      state = [
        {
          id: 1,
          name: "Nguyễn Văn A",
          email: "email@gmail.com",
          phone: "012345677",
        },
      ],
      action
    ) => {
      if (action.type == "ADD") {
        state = [...state, action.payload];
        console.log(action.payload);
      }
      return state;
    },
  },
});
