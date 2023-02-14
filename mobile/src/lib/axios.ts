import axios from "axios";

export const api = axios.create({
  //baseURL: 'http://localhost:3333'
  baseURL: 'https://16b6-187-22-128-76.sa.ngrok.io'
})
