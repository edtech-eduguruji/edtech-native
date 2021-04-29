import BaseApi from './BaseApi';
import URLS from './Urls';

class SessionApi {
  getSession(data) {
    return BaseApi.getWithParams(URLS.SHOWSESSION, data);
  }
}

export default new SessionApi();
