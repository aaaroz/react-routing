import axios, { AxiosError } from "axios";

const APIURL = "https://651a2054340309952f0ce26a.mockapi.io/api/v1";

export const APIProducts = {
  //async function for get all products
  getProducts: async () => {
    try {
      const result = await axios.get(`${APIURL}/products`);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },

  //async function for get product by id
  getProductById: async (id) => {
    try {
      const result = await axios.get(`${APIURL}/products/${id}`);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },

  //async function for post product or create new product
  postProduct: async (data) => {
    try {
      const result = await axios.post(`${APIURL}/products`, data);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },

  //async function for delete product
  deleteProduct: async (id) => {
    try {
      const result = await axios.delete(`${APIURL}/products/${id}`);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },

  //async function for edit product
  updateProduct: async (id, data) => {
    try {
      const result = await axios.put(`${APIURL}/products/${id}`, data);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },
};
