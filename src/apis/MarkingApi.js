import {addSuccessMsg} from '../utils/Utils';
import BaseApi from './BaseApi';
import URLS from './Urls';

class MarkingApi {
  finishCopyCheck(data) {
    return BaseApi.postFormData(URLS.MARKING, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Answer Sheet Checked Successfully');
      }
      return res;
    });
  }
}

export default new MarkingApi();
