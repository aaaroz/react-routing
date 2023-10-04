import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_REQUEST,
  GET_PRODUCT_OBJ,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "./action.type";
import axios from "axios";

export const fetchProductReq = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};

export const fetchProductSucces = (data) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const fetchProductFail = (err) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: err,
  };
};

export const deleteProduct = () => {
  return {
    type: DELETE_PRODUCT,
  };
};

export const addProduct = () => {
  return {
    type: ADD_PRODUCT,
  };
};

export const updateProduct = () => {
  return {
    type: UPDATE_PRODUCT,
  };
};

export const getProductObj = (data) => {
  return {
    type: GET_PRODUCT_OBJ,
    payload: data,
  };
};

export const fetchProductList = () => {
  return (dispatch) => {
    dispatch(fetchProductReq());
    axios
      .get("https://651a2054340309952f0ce26a.mockapi.io/api/v1/products")
      .then((res) => {
        let _list = res.data;
        dispatch(fetchProductSucces(_list));
      })
      .catch((err) => {
        dispatch(fetchProductFail(err.message));
      });
  };
};

export const functionDeleteProduct = (id) => {
  return (dispatch) => {
    dispatch(fetchProductReq());
    axios
      .delete(
        `https://651a2054340309952f0ce26a.mockapi.io/api/v1/products/${id}`
      )
      .then((res) => {
        dispatch(deleteProduct()), console.log(res);
      })
      .catch((err) => {
        dispatch(fetchProductFail(err.message));
      });
  };
};

export const functionAddProduct = (data) => {
  return (dispatch) => {
    dispatch(fetchProductReq());
    axios
      .post("https://651a2054340309952f0ce26a.mockapi.io/api/v1/products", data)
      .then((res) => {
        dispatch(addProduct(res));
      })
      .catch((err) => {
        dispatch(fetchProductFail(err.message));
      });
  };
};

export const functionUpdateProduct = (data, id) => {
  return (dispatch) => {
    dispatch(fetchProductReq());
    axios
      .put(
        "https://651a2054340309952f0ce26a.mockapi.io/api/v1/products" + id,
        data
      )
      .then((res) => {
        dispatch(updateProduct());
      })
      .catch((err) => {
        dispatch(fetchProductFail(err.message));
      });
  };
};

export const fetchProductObj = (id) => {
  return (dispatch) => {
    dispatch(fetchProductReq());
    axios
      .get("https://651a2054340309952f0ce26a.mockapi.io/api/v1/products" + id)
      .then((res) => {
        const listProduct = res.data;
        dispatch(getProductObj(listProduct));
      })
      .catch((err) => {
        dispatch(fetchProductFail(err.message));
      });
  };
};
