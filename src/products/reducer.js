import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  GET_PRODUCT_OBJ,
} from "./action.type";

const initialState = {
  loading: true,
  data: [],
  error: "",
  productObj: {},
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
        productObj: {},
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        loading: false,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        loading: false,
      };
    case GET_PRODUCT_OBJ:
      return {
        ...state,
        loading: false,
        productObj: action.payload,
      };
    default:
      return state;
  }
};
