import {
  addLoader,
  getAxios,
  redirectUrl,
  removeLoader,
  unauthorizedUser,
  updateAndroidApp
} from '../utils/Utils'

const BaseApi = () => {
  return {
    get(URL) {
      addLoader()
      return getAxios()
        .get(URL)
        .then(res => {
          removeLoader()
          return updateAndroidApp(res)
        })
        .catch(err => {
          if (unauthorizedUser(err)) {
            redirectUrl('/login')
          }
          removeLoader()
          throw new Error(err)
        })
    },
    getWithParams(URL, data) {
      addLoader()
      return getAxios()
        .get(URL, {params: data})
        .then(res => {
          removeLoader()
          return updateAndroidApp(res)
        })
        .catch(err => {
          if (unauthorizedUser(err)) {
            redirectUrl('/login')
          }
          removeLoader()
          throw new Error(err)
        })
    },
    postFormData(URL, formData, data) {
      addLoader()
      return getAxios()
        .post(URL, formData, {
          params: data
        })
        .then(res => {
          removeLoader()
          return updateAndroidApp(res)
        })
        .catch(err => {
          if (unauthorizedUser(err)) {
            redirectUrl('/login')
          }
          removeLoader()
          throw new Error(err)
        })
    },
    deleteWithParams(URL, data) {
      addLoader()
      return getAxios()
        .delete(URL, {params: data})
        .then(res => {
          removeLoader()
          return updateAndroidApp(res)
        })
        .catch(err => {
          if (unauthorizedUser(err)) {
            redirectUrl('/login')
          }
          removeLoader()
          throw new Error(err)
        })
    },
    patchFormData(URL, data) {
      addLoader()
      return getAxios()
        .patch(URL, data)
        .then(res => {
          removeLoader()
          return updateAndroidApp(res)
        })
        .catch(err => {
          if (unauthorizedUser(err)) {
            redirectUrl('/login')
          }
          removeLoader()
          throw new Error(err)
        })
    }
  }
}
export default new BaseApi()
