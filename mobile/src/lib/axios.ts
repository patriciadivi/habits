import axios from "axios";

export const api = axios.create({
  baseURL: 'http://192.168.11.5:3333'
})