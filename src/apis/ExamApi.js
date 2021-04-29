import {addSuccessMsg} from '../utils/Utils';
import BaseApi from './BaseApi';
import URLS from './Urls';
class ExamApi {
  addExam(data) {
    return BaseApi.postFormData(URLS.EXAM, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Exam Added Successfully');
      }
      return res;
    });
  }
  showExams(data) {
    return BaseApi.getWithParams(URLS.EXAM, data);
  }
}

export default new ExamApi();
