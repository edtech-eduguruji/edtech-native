/* eslint-disable import/no-cycle */
import Axios from 'axios'
import React from 'react'
import {ToastAndroid} from 'react-native'
import config from 'react-native-config'
import {getFocusedRouteNameFromRoute} from '@react-navigation/native'
import LocalStorage from '../common/LocalStorage'
import {showLoader, hideLoader} from '../common/AppLoader'
import {ROLES_KEY} from '../constants/Constants'

export function formatData(data, keys, actionItems, actionHandler, actionKey) {
  const result = []

  for (const i in data) {
    const dataVal = data[i]
    let actionValue = null
    if (Array.isArray(actionKey)) {
      actionValue = actionKey.map(item => dataVal[item])
    } else {
      actionValue = dataVal[actionKey]
    }

    const row = keys.map(item => dataVal[item])
    if (actionItems) {
      row.push(
        React.cloneElement(actionItems, {
          onClick: actionHandler(actionValue)
        })
      )
    }
    result.push(row)
  }
  return result
}

export function addSuccessMsg(message) {
  ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.CENTER)
}

export function addErrorMsg(message, duration) {
  ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.CENTER)
}

const colors = {
  0: 'primary',
  1: 'warning',
  2: 'danger',
  3: 'success',
  4: 'info',
  5: 'rose'
}

export function tileColor(index) {
  const val = Math.floor(Math.random() * 6)
  return colors[index] ? colors[index] : colors[val]
}

export function viewError(res) {
  if (res.isError === true) {
    addErrorMsg(res.Message)
  } else {
    addSuccessMsg(res.Message)
    return res
  }
}

export function addLoader() {
  showLoader()
}

export function removeLoader() {
  hideLoader()
}

// It is used for delete confirmation
export function deleteBox(message, handleAction) {}

// It is used to display error message and response from PHP's on dialog box
export function errorDialog(message, title) {}

export function getUserClasses() {
  const user = LocalStorage.getUser()
  if (user && user.class_id) {
    if (Array.isArray(user.class_id)) {
      return user.class_id.map(item => item.classId)
    } else {
      return user.class_id
    }
  } else {
    return null
  }
}

export function getUserSubject() {
  const user = LocalStorage.getUser()
  const sub =
    user &&
    user.class_id &&
    Array.isArray(user.class_id) &&
    user.class_id
      .filter(item => item.subject != null)
      .map(
        item =>
          item.subject &&
          item.subject.length > 0 &&
          item.subject.map(sItem => sItem.subjectId)
      )

  if (sub && sub.length) {
    return sub[0]
  }
}

export function getAxios() {
  const axios = Axios
  const user = LocalStorage.getUser()
  const userId = user && user.user_id
  // const role = LocalStorage.getUser() && LocalStorage.getUser().role
  axios.defaults.headers.common.Authorization = `${userId}`
  const classId = getUserClasses()
  axios.defaults.headers.common['X-AUTH'] = classId ? `${classId}` : ''
  const subjectId = getUserSubject()
  axios.defaults.headers.common['Y-AUTH'] = subjectId ? `${subjectId}` : ''
  return axios
}

export function getUserRole() {
  const user = LocalStorage.getUser()
  return user && user.role
}

/** value: 1= teacher, 0= student */
export function filterSubjectWise(sid, data, value) {
  if (value) {
    return data.filter(
      item =>
        item.subjects &&
        item.subjects.find(
          i => i.subject && i.subject.find(x => x.subjectId === sid)
        )
    )
  } else {
    return data.filter(
      item => item.Subjects && item.Subjects.find(i => sid === i.subjectId)
    )
  }
}

export function validateUser() {
  const user = LocalStorage.getUser()
  let isValidate = false
  if (user && user.user_id && user.role && user.name) {
    isValidate = true
  }
  return isValidate
}

export function updateAlert(message, title) {}

export function createdDateTime(ms, onlyDateTime, format) {
  if (ms !== '') {
    const dateObject = new Date(parseInt(ms))
    const date = dateObject.toLocaleString('en-US', {
      day: '2-digit'
    })
    const month = dateObject.toLocaleString('en-US', {
      month: '2-digit'
    })
    const year = dateObject.toLocaleString('en-US', {
      year: 'numeric'
    })
    const hour = dateObject.getHours()
    const minute = dateObject.toLocaleString('en-US', {minute: 'numeric'})
    const min = minute > 9 ? minute : `0${minute}`
    const ampm = hour >= 12 ? 'PM' : 'AM'

    if (onlyDateTime === 1) {
      if (format === 'yyyy-MM-dd') {
        return (
          `${year}-` +
          `${month <= 9 ? 0 + month : month}` +
          '-' +
          `${date <= 9 ? 0 + date : date}`
        )
      } else {
        return `${date}-${month}-${year}`
      }
    } else if (onlyDateTime === 0) {
      return `${hour}:${min}`
    } else {
      return `${date}-${month}-${year},` + ` ${hour}:${min} ${ampm}`
    }
  }
}

export function redirectUrl(id, value) {}

export function setErrorFields(isError, errorList, fieldName) {
  if (isError) {
    if (!errorList.find(item => item[fieldName])) {
      errorList.push({[fieldName]: fieldName})
    }
  } else {
    if (errorList.find(item => item[fieldName])) {
      errorList.splice(fieldName, 1)
    }
  }
  return errorList
}

export function deleteFromList(list, keyName, keyValue) {
  return list.filter(item => item[keyName] !== keyValue)
}

export function updateInList(list, uniqueElement, updateElement) {
  return list.map(item => {
    if (item[uniqueElement.keyName] === uniqueElement.keyValue) {
      item[updateElement.keyName] = updateElement.keyValue
    }
    return item
  })
}

export function updateMultipleInList(list, uniqueElement, updateElement) {
  return list.map(item => {
    if (item[uniqueElement.keyName] === uniqueElement.keyValue) {
      for (const key in updateElement) {
        if (updateElement.hasOwnProperty(key)) {
          const element = updateElement[key]
          item[key] = element
        }
      }
    }
    return item
  })
}

export function isJSON(str) {
  try {
    return JSON.parse(str) && !!str
  } catch (e) {
    return false
  }
}

export function filterRoutes(id) {}

export function updateAndroidApp(response) {
  if (response.headers) {
    if (response.headers.hasOwnProperty('npmversion')) {
      if (parseInt(response.headers.npmversion) > config.ANDROIDVERSION) {
      } else {
        return response
      }
    } else if (response.headers.hasOwnProperty('NPMVERSION')) {
      if (parseInt(response.headers.npmversion) > config.ANDROIDVERSION) {
      } else {
        return response
      }
    } else {
      return response
    }
  }
}

// Used to replace key names for excel file.
export function replaceKey(data, newKeyName, oldKeyName) {
  let i
  for (i = 0; i < data.length; i++) {
    data[i][newKeyName] = data[i][oldKeyName]
    delete data[i][oldKeyName]
  }
  return data
}

export function deleteEachKeyPair(data, deleteObj) {
  if (deleteObj) {
    data.forEach(element => {
      delete element[deleteObj]
    })
  }
  return data
}

export function deleteIndex(data, key, value) {
  data.map((item, index) => {
    if (item[key] === value) {
      data.splice(index, 1)
    }
  })
  return data
}

export function isStudent() {
  if (ROLES_KEY.STUDENT) {
    return getUserRole() === ROLES_KEY.STUDENT
  }
  return false
}

export function getMilliDifference(endTime, startTime, isTimer) {
  if (startTime !== null) {
    var startingTime = startTime
  } else {
    var startingTime = new Date().getTime()
  }
  var minutes = parseInt(endTime - startingTime) / 1000
  var minutes = parseInt(minutes / 60)
  const timer = Date.now() + parseInt(minutes) * 60000
  if (isTimer) {
    return timer
  } else {
    if (minutes % 2 === 0) {
      return minutes
    } else {
      return minutes + 1
    }
  }
}

export function getSmsCheck(config, isSMSCheck) {
  return config.ISSMS && isSMSCheck
}

export function unauthorizedUser(error) {
  const arr = error.toString().split(' ')
  if (arr[arr.length - 1] === '401') {
    return true
  } else {
    return false
  }
}

// Parameter Details:-
// 1- JSON Data to be filtered
// 2- Key name for the condition
// 3- Value to check on key
export function filterData(data, key, value) {
  return data.filter(item => item[key] === value)
}

export function checkExtension(fileName) {
  return fileName
    ? fileName.substring(fileName.length - 3, fileName.length)
    : null
}

export function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Ddashboard'
  return routeName
}
