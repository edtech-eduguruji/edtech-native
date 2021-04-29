import {addSuccessMsg} from 'utils/Utils';
import BaseApi from './BaseApi';
import URLS from './Urls';

class TeachersApi {
  uploadTeachers(formData) {
    return BaseApi.postFormData(URLS.ADDTEACHERS, formData).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Teachers List Uploaded Successfully');
      }
      return res;
    });
  }

  showTeachers(data) {
    return BaseApi.getWithParams(URLS.SHOWTEACHERS, data);
  }

  deleteTeachers(data) {
    return BaseApi.getWithParams(URLS.DELETETEACHERS, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Teacher Deleted Successfully');
      }
      return res;
    });
  }

  updateTeacherPermission(formData) {
    return BaseApi.postFormData(URLS.UPDATETEACHERS, formData).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Teachers updated successfully');
      }
      return res;
    });
  }

  updateProfileDetails(data) {
    return BaseApi.postFormData(URLS.UPDATEPROFILE, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Profile Details Updated Successfully');
      }
      return res;
    });
  }

  updateLoginDetails(data) {
    return BaseApi.postFormData(URLS.UPDATELOGIN, data)
      .then(res => {
        if (res.status === 200) {
          addSuccessMsg('Login Details Updated Successfully');
          return res;
        }
      })
      .catch(err => {
        errorDialog('Username Already Exists');
        return err;
      });
  }

  teacherActivation(data) {
    return BaseApi.getWithParams(URLS.USERACTIVATION, data);
  }
}

export default new TeachersApi();
