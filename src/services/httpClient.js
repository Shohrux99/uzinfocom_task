import axios from "axios";
// import { showAlert } from "../store/alert/alert.thunk";
// import authService from "../services/auth/authService";
// import { authActions } from "../store/auth/auth.slice";
export const baseURL = process.env.NEXT_PUBLIC_BASE_URL

const httpClient = axios.create({
  baseURL,
  timeout: 100000,
})

// const errorHandler = (error, hooks) => {

//   if(error.response?.data?.data) store.dispatch(showAlert(error.response.data.data))
//   else store.dispatch(showAlert('___ERROR___'))

//   return Promise.reject(error.response)
// }

const errorHandler = (error, hooks) => {
  // const token = store.getState().auth.token

  return Promise.reject(error.response)

  // if(error?.response?.status === 401) {
  //     const refreshToken = store.getState().auth.refreshToken
  //
  //     const params = {
  //         refresh_token: refreshToken,
  //     }
  //
  //     const originalRequest = error.config
  //
  //     return authService.refreshToken(params)
  //         .then((res) => {
  //             store.dispatch(authActions.setTokens(res))
  //             return httpClient(originalRequest);
  //         })
  //         .catch((err) => {
  //             console.log(err)
  //             return Promise.reject(error)
  //         })
  // } else {
  //     if (error?.response) {
  //         if(error.response?.data?.data) {
  //             if (error.response.data.data !== "rpc error: code = Internal desc = member group is required to add new member") {
  //                 store.dispatch(showAlert(error.response.data.data))
  //             }
  //         }
  //         if (error?.response?.status === 403) {
  //             store.dispatch(authActions.logout())
  //             // store.dispatch(logoutAction(logoutParams)).unwrap().catch()
  //         }
  //     }
  //
  //     else store.dispatch(showAlert('___ERROR___'))
  //
  //     return Promise.reject(error.response)
  // }
}


//
// httpClient.interceptors.request.use(
//   config => {
//     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfcGxhdGZvcm1faWQiOiI3ZDRhNGMzOC1kZDg0LTQ5MDItYjc0NC0wNDg4YjgwYTRjMDEiLCJjbGllbnRfdHlwZV9pZCI6IjVhMzgxOGE5LTkwZjAtNDRlOS1hMDUzLTNiZTBiYTFlMmMwMSIsImRhdGEiOiJhZGRpdGlvbmFsIGpzb24gZGF0YSIsImV4cCI6MTY1OTg1MTc5NCwiaWF0IjoxNjU5NzY1Mzk0LCJpZCI6IjZhNWY2ZjBhLTA3NTEtNDU5ZS1hYjNkLWZiYmQ5YzlmOWUzZCIsImlwIjoiYWRkaXRpb25hbCBqc29uIGRhdGEiLCJwcm9qZWN0X2lkIjoiZjU5NTVjODItZjI2NC00NjU1LWFlYjQtODZmZDFjNjQyY2I2Iiwicm9sZV9pZCI6ImExY2ExMzAxLTRkYTktNDI0ZC1hOWUyLTU3OGFlNmRjZGUwMSIsInVzZXJfaWQiOiJmNzk5ZjFjNS1jZTVmLTRmZGQtYWMyMy1mNTQyMjQ3ZGNjMDEifQ.ja9UaDyXTGxT0ks64Vkpe2Cf40RYdr1hREXi_lu6Wt4'
//
//     if(token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//
//   error => errorHandler(error)
// )
//
// httpClient.interceptors.response.use(response => response.data.data , errorHandler)

export default httpClient