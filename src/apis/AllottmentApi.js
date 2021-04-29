import {addSuccessMsg} from '../utils/Utils';
import BaseApi from './BaseApi';
import URLS from './Urls';

class AllottmentApi {
  allottSheets(data) {
    return BaseApi.postFormData(URLS.ALLOTTMENT, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Answer Sheets Allotted Successfully');
      }
      return res;
    });
  }
  showAllottments(data) {
    return BaseApi.getWithParams(URLS.ALLOTTMENT, data);
  }
  updateAllottment(data) {
    return BaseApi.patchFormData(URLS.ALLOTTMENT, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Allottment Data Updated Successfully');
      }
      return res;
    });
  }
}

export default new AllottmentApi();
