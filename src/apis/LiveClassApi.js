import BaseApi from './BaseApi'
import URLS from './Urls'
import {addSuccessMsg} from '../utils/Utils'

const LiveClassApi = () => {
  return {
    getLiveClasses(data) {
      return BaseApi.getWithParams(URLS.SHOWLIVECLASSES, data)
    },

    createLiveClasses(data) {
      return BaseApi.postFormData(URLS.MANAGELIVECLASSES, data).then(res => {
        if (res.status === 200) {
          addSuccessMsg('Live Classes Added Successfully')
        }
        return res
      })
    },
    deleteLiveClasses(data) {
      return BaseApi.getWithParams(URLS.DELETELIVECLASSES, data).then(res => {
        if (res.status === 200) {
          addSuccessMsg('Live Class Deleted Successfully')
        }
        return res
      })
    },
    updateLiveClasses(data) {
      return BaseApi.postFormData(URLS.MANAGELIVECLASSES, data).then(res => {
        if (res.status === 200) {
          addSuccessMsg('Live Class Updated Successfully')
        }
        return res
      })
    },
    liveClassActivation(data) {
      return BaseApi.getWithParams(URLS.LIVECLASSACTIVATION, data)
    },

    //  student side
    studentAttendance(data) {
      return BaseApi.postFormData(URLS.LIVECLASSATTENDANCE, data)
    },
    viewAttendance(data) {
      return BaseApi.getWithParams(URLS.LIVECLASSATTENDANCE, data)
    },
    updateAttendance(data) {
      return BaseApi.patchFormData(URLS.LIVECLASSATTENDANCE, data).then(res => {
        if (res.status === 200) {
          addSuccessMsg('Attendance Updated Successfully')
        }
        return res
      })
    },

    student_getLiveClassesDetails(data) {
      return BaseApi.getWithParams(URLS.LIVECLASSESDETAILS, data)
    }
  }
}

export default new LiveClassApi()
