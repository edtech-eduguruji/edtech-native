import BaseApi from './BaseApi';
import URLS from './Urls';

class DashboardApi {
  getCount(data) {
    return BaseApi.getWithParams(URLS.COUNT, data);
  }
  getUpdates(data) {
    return BaseApi.getWithParams(URLS.DASHBOARDUPDATES, data);
  }
  getTeachUpdates(data) {
    return BaseApi.getWithParams(URLS.TEACHERDASHBOARDUPDATES, data);
  }
}

export default new DashboardApi();
