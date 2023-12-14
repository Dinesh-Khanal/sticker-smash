import axios from "axios";
import { ProductType } from "../types";
const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-type": "application/json",
  },
});

const ProductService = {
  async getProduct(): Promise<ProductType[]> {
    return api.get("/products").then((result) => result.data);
  },
};
export default ProductService;
