import axios from "axios";
import { getAccessToken, verifyToken } from "../utils/utilities";
class HttpService {

  constructor () {
    this.token = getAccessToken();
    this.baseUrl = process.env.baseUrl;
  }

  postData = async (payload,url) => {
    return axios.post(this.baseUrl + url, payload)
  };

  postDataWithToken = async (payload,url) => {
    verifyToken(this.token);
    const AuthStr = 'Bearer '.concat(this.token);
    return axios.post(this.baseUrl + url, payload, { headers: { Authorization: AuthStr }})
  };

  postDataWithTokenForFile = async (payload,url) => {
    verifyToken(this.token);
    const formData = new FormData();
    formData.append('file', payload.file)
    const AuthStr = 'Bearer '.concat(this.token);
    return axios.post(this.baseUrl + url, formData, { headers: { Authorization: AuthStr, 'Content-Type': 'multipart/form-data; charset=utf-8;' }})
  };

  getData = async (url) => {
    verifyToken(this.token);
    const AuthStr = 'Bearer '.concat(this.token);
    return axios.get(this.baseUrl + url, { headers: { Authorization: AuthStr } })
  };

  getDataWithoutToken = async (url) => {
    return axios.get(this.baseUrl + url)
  };

  getDataWithToken = async (url) => {
    verifyToken(this.token);
    const AuthStr = 'Bearer '.concat(this.token); 
    return axios.get(this.baseUrl + url,  { headers: { Authorization: AuthStr } })
  };

  putData = async (formData,url) => {
    verifyToken(this.token);
    const AuthStr = 'Bearer '.concat(this.token); 
    return axios.put(this.baseUrl + url, formData, { headers: { Authorization: AuthStr } })
  };

  putDataWithoutToken = async (formData,url) => {
    verifyToken(this.token);
    return axios.put(this.baseUrl + url, formData)
    // .then((res) => res) //! the then and catch is done insdie actionFunction
  };

  deleteData = async (url) => {
    verifyToken(this.token);
    const AuthStr = 'Bearer '.concat(this.token); 
    return axios.delete(this.baseUrl + url, { headers: { Authorization: AuthStr } })
    //.then((res) => res)
  };
}
export default HttpService;