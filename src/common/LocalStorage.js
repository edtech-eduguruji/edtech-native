// import AsyncStorage from '@react-native-async-storage/async-storage'
import SyncStorage from 'sync-storage'
// eslint-disable-next-line import/no-cycle
import {isJSON} from '../utils/Utils'

const LocalStorage = () => {
  return {
    setUser(obj) {
      SyncStorage.set('user_obj', JSON.stringify(obj))
    },
    getUser() {
      const user = SyncStorage.get('user_obj')
      return user && isJSON(user) && JSON.parse(user)
    },
    removeUser() {
      SyncStorage.remove('user_obj')
    },
    setClasses(obj) {
      SyncStorage.set('classes', JSON.stringify(obj))
    },
    getClasses() {
      const cls = SyncStorage.get('classes')
      return cls && isJSON(cls) && JSON.parse(cls)
    },
    removeClasses() {
      SyncStorage.remove('classes')
    },
    getLogout() {
      this.removeUser()
      this.removeClasses()
    }
  }
}

export default new LocalStorage()
