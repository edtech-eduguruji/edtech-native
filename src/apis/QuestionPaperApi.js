import {addSuccessMsg} from '../utils/Utils';
import BaseApi from './BaseApi';
import URLS from './Urls';

class QuestionPaperApi {
  addQuestionPaper(data) {
    return BaseApi.postFormData(URLS.QUESTIONPAPER, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Question Paper Added Successfully');
      }
      return res;
    });
  }
  showQuestionPaper(data) {
    return BaseApi.getWithParams(URLS.QUESTIONPAPER, data);
  }
}

export default new QuestionPaperApi();
