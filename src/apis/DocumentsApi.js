import {addSuccessMsg} from 'utils/Utils';
import BaseApi from './BaseApi';
import URLS from './Urls';

class DocumentsApi {
  uploadDocuments(formData) {
    return BaseApi.postFormData(URLS.MANAGEDOCUMENTS, formData).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Documents are uploaded successfully');
      }
      return res;
    });
  }

  getDocuments(data) {
    return BaseApi.getWithParams(URLS.SHOWDOCUMENTS, data);
  }

  deleteDocuments(data) {
    return BaseApi.getWithParams(URLS.DELETEDOCUMENTS, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Documents deleted successfully');
      }
      return res;
    });
  }

  updateDocuments(formData) {
    return BaseApi.postFormData(URLS.MANAGEDOCUMENTS, formData).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Document Updated Successfully');
      }
      return res;
    });
  }
}

export default new DocumentsApi();
