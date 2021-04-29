import {addSuccessMsg} from '../utils/Utils';
import BaseApi from './BaseApi';
import URLS from './Urls';
class SemesterApi {
  manageSemester(data) {
    return BaseApi.postFormData(URLS.SEMESTER, data);
  }
  showSemesters(data) {
    return BaseApi.getWithParams(URLS.SEMESTER, data);
  }
  deleteSemester(data) {
    return BaseApi.deleteWithParams(URLS.SEMESTER, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Semester Deleted Successfully');
      }
      return res;
    });
  }
}

export default new SemesterApi();
