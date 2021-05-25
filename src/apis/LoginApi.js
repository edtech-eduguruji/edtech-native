import BaseApi from './BaseApi'
import URLS from './Urls'

const LoginApi = () => {
  return {
    userLogin(data) {
      return BaseApi.getWithParams(URLS.LOGIN, data)
        .then(null)
        .catch(() => {
          throw new Error('Invalid login or Username password are incorrect')
        })
    }
  }
}

export default LoginApi()
