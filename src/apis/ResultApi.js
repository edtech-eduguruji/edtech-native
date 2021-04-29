import {addSuccessMsg} from 'utils/Utils';
import BaseApi from './BaseApi';
import URLS from './Urls';

class ResultApi {
  uploadResult(formData) {
    return BaseApi.postFormData(URLS.RESULTUPLOAD, formData).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Result Uploaded Successfully');
      }
      return res;
    });
  }
  viewResult(data) {
    return BaseApi.getWithParams(URLS.VIEWRESULT, data);
  }
  deleteResult(data) {
    return BaseApi.getWithParams(URLS.DELETERESULT, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Result Deleted Successfully');
      }
      return res;
    });
  }
}

export default new ResultApi();
