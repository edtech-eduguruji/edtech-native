import {addSuccessMsg} from 'utils/Utils';
import BaseApi from './BaseApi';
import URLS from './Urls';

class CircularApi {
  getCirculars(data) {
    return BaseApi.getWithParams(URLS.SHOWCIRCULARS, data);
  }

  createCirculars(data) {
    return BaseApi.postFormData(URLS.MANAGECIRCULARS, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Circular created Successfully');
      }
      return res;
    });
  }

  deleteCirculars(data) {
    return BaseApi.getWithParams(URLS.DELETECIRCULARS, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Circular deleted Successfully');
      }
      return res;
    });
  }

  updateCirculars(data) {
    return BaseApi.postFormData(URLS.MANAGECIRCULARS, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Circular Updated Successfully');
      }
      return res;
    });
  }
}

export default new CircularApi();
