import {addSuccessMsg} from '../utils/Utils';
import BaseApi from './BaseApi';
import URLS from './Urls';

class AnswerSheetApi {
  addAnswerSheets(data) {
    return BaseApi.postFormData(URLS.ANSWERSHEET, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Answer Sheets Added Successfully');
      }
      return res;
    });
  }
  showAnswerSheets(data) {
    return BaseApi.getWithParams(URLS.ANSWERSHEET, data);
  }
  updateScanStatus(data) {
    return BaseApi.patchFormData(URLS.ANSWERSHEET, data);
  }
}

export default new AnswerSheetApi();
