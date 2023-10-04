import axios, { AxiosError } from "axios";

const APIURL = "https://651a2054340309952f0ce26a.mockapi.io/api/v1";

export const APIProducts = {
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

  updateProduct: async (id, payload) => {
    try {
      const result = await axios.put(`${APIURL}/products/${id}`, payload);
      console.log(result);
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
