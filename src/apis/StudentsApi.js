import {addSuccessMsg, errorDialog} from 'utils/Utils';
import BaseApi from './BaseApi';
import URLS from './Urls';

class StudentsApi {
  uploadStudents(formData) {
    return BaseApi.postFormData(URLS.STUDENTUPLOAD, formData).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Students List Uploaded Successfully');
      }
      return res;
    });
  }

  getStudents(data) {
    return BaseApi.getWithParams(URLS.SHOWSTUDENTS, data);
  }

  deleteStudent(data) {
    return BaseApi.getWithParams(URLS.DELETESTUDENT, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Student Deleted Successfully');
      }
      return res;
    });
  }

  updateStudentPermission(formData) {
    return BaseApi.postFormData(URLS.UPDATESTUDENT, formData).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Student updated successfully');
      }
      return res;
    });
  }

  updateProfileDetails(data) {
    return BaseApi.postFormData(URLS.UPDATEPROFILE, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Student Details Updated Successfully');
      }
      return res;
    });
  }
  updateLoginDetails(data) {
    return BaseApi.postFormData(URLS.UPDATELOGIN, data)
      .then(res => {
        if (res.status === 200) {
          addSuccessMsg('Student Login Details Updated Successfully');
          return res;
        }
      })
      .catch(err => {
        errorDialog('Username Already Exists');
        return err;
      });
  }
  studentActivation(data) {
    return BaseApi.getWithParams(URLS.USERACTIVATION, data);
  }

  migrateStudents(formData) {
    return BaseApi.postFormData(URLS.MIGRATESTUDENTS, formData).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Students Migrated Successfully');
      }
      return res;
    });
  }
}

export default new StudentsApi();
