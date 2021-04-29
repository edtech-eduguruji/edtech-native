import {addSuccessMsg} from 'utils/Utils';
import BaseApi from './BaseApi';
import URLS from './Urls';

class LecturesApi {
  getLectures(data) {
    return BaseApi.getWithParams(URLS.SHOWLECTURES, data);
  }

  createLectures(data) {
    return BaseApi.postFormData(URLS.MANAGELECTURES, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Lectures Added Successfully');
      }
      return res;
    });
  }

  deleteLectures(data) {
    return BaseApi.getWithParams(URLS.DELETELECTURES, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Lectures deleted Successfully');
      }
      return res;
    });
  }

  updateLectures(data) {
    return BaseApi.postFormData(URLS.MANAGELECTURES, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Lecture Updated Successfully');
      }
      return res;
    });
  }

  //Student Side
  student_getVideoDetails(data) {
    return BaseApi.getWithParams(URLS.VIDEODETAILS, data);
  }
}

export default new LecturesApi();
