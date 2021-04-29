import {addSuccessMsg} from '../utils/Utils';
import BaseApi from './BaseApi';
import URLS from './Urls';
class AttendanceApi {
  getAttendance(data) {
    return BaseApi.getWithParams(URLS.GETATTENDANCE, data);
  }
  markAttendance(data) {
    return BaseApi.postFormData(URLS.MARKATTENDANCE, data);
  }
  fetchLeaves(data) {
    return BaseApi.getWithParams(URLS.FETCHLEAVES, data);
  }
  approveLeave(data) {
    return BaseApi.postFormData(URLS.APPROVELEAVE, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Leave approved');
      }
      return res;
    });
  }
  //Student Side
  viewAttendance(data) {
    return BaseApi.getWithParams(URLS.VIEWATTENDANCE, data);
  }
  submitLeave(data) {
    return BaseApi.postFormData(URLS.SUBMITLEAVE, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Leave request submitted');
      }
      return res;
    });
  }
}

export default new AttendanceApi();
