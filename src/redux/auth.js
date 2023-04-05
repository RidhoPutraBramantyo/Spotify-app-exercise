import { auth_types } from "./types";

const init = {
	email: "",
	password: "",
};
function userReducer(state = init, action) {
	if (action.type == auth_types.login) {
		return {
			...state,
			email: action.payload.email,
			password: action.payload.password,
		};
	} else {
		return init;
	}
	return state;
}

export default userReducer;
