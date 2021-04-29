import AsyncStorage from '@react-native-async-storage/async-storage';
import {isJSON} from './../utils/Utils';

const LocalStorage = () => {
  return {
    setUser(obj) {
      AsyncStorage.setItem('user_obj', JSON.stringify(obj));
    },
    getUser() {
      return (
        AsyncStorage.getItem('user_obj') &&
        isJSON(AsyncStorage.getItem('user_obj')) &&
        JSON.parse(AsyncStorage.getItem('user_obj'))
      );
    },
    removeUser() {
      AsyncStorage.removeItem('user_obj');
    },
    setClasses(obj) {
      AsyncStorage.setItem('classes', JSON.stringify(obj));
    },
    getClasses() {
      return (
        AsyncStorage.getItem('classes') &&
        isJSON(AsyncStorage.getItem('classes')) &&
        JSON.parse(AsyncStorage.getItem('classes'))
      );
    },
    removeClasses() {
      AsyncStorage.removeItem('classes');
    },
    getLogout() {
      this.removeUser();
      this.removeClasses();
    },
  };
};

export default new LocalStorage();
