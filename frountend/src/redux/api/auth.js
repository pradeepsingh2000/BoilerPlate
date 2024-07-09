import { api, handleResponse, handleError } from "../../services/api.service";



export const loginUser = (data, role = 'user') =>
  api()
    .post(`/user/auth/login/${role}`, data)
    .then(handleResponse)
    .catch(handleError);

export const registerUser = (data) =>
  api()
    .post(`/user/auth/register`, data)
    .then(handleResponse)
    .catch(handleError);

export const userProfile = (token) =>
  api(token)
    .get('/user/auth/profile')
    .then(handleResponse)
    .catch(handleError)

