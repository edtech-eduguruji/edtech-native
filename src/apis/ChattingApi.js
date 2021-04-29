import {viewError} from '../utils/Utils';
import BaseApi from './BaseApi';
import URLS from './Urls';
class ChattingApi {
  addChat(data) {
    return BaseApi.postFormData(URLS.CONVERSATION, data).then(res => {
      return viewError(res.data);
    });
  }
  sendMessage(data) {
    return BaseApi.postFormData(URLS.CONVERSATIONMESSAGE, data);
  }
  showChats(data) {
    return BaseApi.getWithParams(URLS.CONVERSATION, data);
  }
  showMessages(data) {
    return BaseApi.getWithParams(URLS.CONVERSATIONMESSAGE, data);
  }
  deleteChat(data) {
    return BaseApi.deleteWithParams(URLS.CONVERSATION, data);
  }
  deleteChatMessage(data) {
    return BaseApi.deleteWithParams(URLS.CONVERSATIONMESSAGE, data);
  }
  messageAllowance(data) {
    return BaseApi.patchFormData(URLS.CONVERSATION, data);
  }
  updateUnreadMessages(data) {
    return BaseApi.patchFormData(URLS.CONVERSATIONMESSAGE, data);
  }
}

export default new ChattingApi();
