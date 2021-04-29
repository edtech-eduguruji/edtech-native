import { addSuccessMsg } from 'utils/Utils'
import BaseApi from './BaseApi'
import URLS from './Urls'

class AssignmentApi {
  createAssignment(formData) {
    return BaseApi.postFormData(URLS.MANAGEASSIGNMENT, formData).then((res) => {
      if (res.status === 200) addSuccessMsg('Assignment Created successfully')
      return res
    })
  }

  updateAssignment(formData) {
    return BaseApi.postFormData(URLS.MANAGEASSIGNMENT, formData).then((res) => {
      if (res.status === 200) addSuccessMsg('Assignment Updated successfully')
      return res
    })
  }

  getAssignments(data) {
    return BaseApi.getWithParams(URLS.SHOWASSIGNMENTS, data)
  }

  deleteAssignment(data) {
    return BaseApi.getWithParams(URLS.DELETEASSIGNMENT, data).then((res) => {
      if (res.status === 200) addSuccessMsg('Assignment deleted successfully')
      return res
    })
  }

  approveAssignment(data) {
    return BaseApi.getWithParams(URLS.APPROVEASSIGNMENT, data)
  }

  checkAssignment(data) {
    return BaseApi.getWithParams(URLS.CHECKASSIGNMENT, data)
  }

  enableAssignment(data) {
    return BaseApi.getWithParams(URLS.ENABLEASSIGNMENT, data)
  }

  student_uploadAssignment(formData) {
    return BaseApi.postFormData(URLS.UPLOADASSIGNMENT, formData).then((res) => {
      if (res.status === 200) addSuccessMsg('Assignment submitted successfully')
      return res
    })
  }
}

export default new AssignmentApi()
