import { Avatar } from "@chakra-ui/react";

const init = {
  email: "",
  password: "",
};

function userReducer(state = init, action) {
  // action adalah even yang terjadi
  if (action.type == auth_types.login) {
    return {
      ...state,
      email: action.payload.email,
      email,
      password: action.payload.password,
    };
  } else if (action.type == auth_types.logout) {
    return init;
  }
}

export default userReducer;
