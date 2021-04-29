import BaseApi from './BaseApi';
import URLS from './Urls';

class ProfileApi {
  getProfile(data) {
    return BaseApi.getWithParams(URLS.USERPROFILE, data);
  }
}
export default new ProfileApi();
