import {addSuccessMsg} from 'utils/Utils';
import BaseApi from './BaseApi';
import URLS from './Urls';

class StudentsApi {
  childRegister(formData) {
    return BaseApi.postFormData(URLS.STUDENTUPLOAD, formData).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Registered Successfully');
      }
      return res;
    });
  }
}

export default new StudentsApi();
