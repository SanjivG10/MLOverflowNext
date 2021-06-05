import { USER_IMAGE_LOCAL_STORAGE, USER_TOKEN_LOCAL_STORAGE } from "./../constants";


export const userReducer = (state: any, action: { type: string, payload: any }) => {

  switch (action.type) {
    case "toggleModal":
      if (action.payload) {
        return {
          ...state,
          show: action.payload
        }
      }
      return {
        ...state,
        show: !state.show,
      };

    case "loggedIn":
      if (action.payload) {
        const { token, img } = action.payload;
        localStorage.setItem(USER_TOKEN_LOCAL_STORAGE, token)
        localStorage.setItem(USER_IMAGE_LOCAL_STORAGE, img)

        return {
          ...state,
          loginStatus: true,
        };
      }

      localStorage.removeItem(USER_TOKEN_LOCAL_STORAGE);
      localStorage.removeItem(USER_IMAGE_LOCAL_STORAGE);
      return { ...state, loginStatus: false }

    case "loggedOut":
      localStorage.removeItem(USER_TOKEN_LOCAL_STORAGE);
      localStorage.removeItem(USER_IMAGE_LOCAL_STORAGE);
      return {
        ...state,
        loginStatus: false,
      };

    case "n":
      console.log("YOLO")
      return { ...state }


    default:
      return state;
  }
};