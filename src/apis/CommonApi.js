import {addSuccessMsg, viewError} from 'utils/Utils';
import BaseApi from './BaseApi';
import URLS from './Urls';

const CommonApi = (onSuccess, onFailure) => {
  return {
    getClasses() {
      return BaseApi.get(URLS.GETCLASS);
    },

    getSubject() {
      return BaseApi.get(URLS.GETSUBJECT);
    },

    getSubjectByClassId(data) {
      return BaseApi.getWithParams(URLS.SHOWSUBJECT, data);
    },

    addNewClass(data) {
      return BaseApi.postFormData(URLS.MANAGECLASS, data)
        .then(onSuccess)
        .catch(err => onFailure(err));
    },
    updateClass(data) {
      return BaseApi.postFormData(URLS.MANAGECLASS, data).then(res => {
        if (res.status === 200) {
          addSuccessMsg('Class Updated Successfully');
        }
        return res;
      });
    },
    addSubject(data) {
      return BaseApi.postFormData(URLS.MANAGESUBJECTS, data).then(res => {
        if (res.status === 200) {
          addSuccessMsg('New Subject Added Successfully');
        }
        return res;
      });
    },
    updateSubject(data) {
      return BaseApi.postFormData(URLS.MANAGESUBJECTS, data).then(res => {
        if (res.status === 200) {
          addSuccessMsg('Subject Updated Successfully');
        }
        return res;
      });
    },
    deleteSubject(data) {
      return BaseApi.getWithParams(URLS.DELETESUBJECTS, data).then(res => {
        if (res.status === 200) {
          addSuccessMsg('Subject Deleted Successfully');
        }
        return res;
      });
    },
    deleteClass(data) {
      return BaseApi.getWithParams(URLS.DELETECLASS, data).then(res => {
        if (res.status === 200) {
          addSuccessMsg('Class Deleted Successfully');
        }
        return res;
      });
    },
    changePassword(data) {
      return BaseApi.postFormData(URLS.CHANGEPASSWORD, data).then(res => {
        return viewError(res.data);
      });
    },
  };
};

const onSuccess = res => {
  if (res.status === 200) {
    addSuccessMsg('New Class Added Successfully');
  }
  return res;
};

const onFailure = () => {};

export default CommonApi(onSuccess, onFailure);
