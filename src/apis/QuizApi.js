import {addSuccessMsg} from 'utils/Utils';
import BaseApi from './BaseApi';
import URLS from './Urls';

class QuizApi {
  getQuiz(data) {
    return BaseApi.getWithParams(URLS.QUIZFETCH, data);
  }

  showAttempts(data) {
    return BaseApi.getWithParams(URLS.QUIZATTEMPTS, data);
  }

  deleteAttempt(data) {
    return BaseApi.getWithParams(URLS.DELETEATTEMPT, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Attempt Deleted Successfully');
      }
      return res;
    });
  }

  deleteQuiz(data) {
    return BaseApi.getWithParams(URLS.QUIZDELETE, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Quiz Deleted Successfully');
      }
      return res;
    });
  }

  getQuizQuestion(data) {
    return BaseApi.getWithParams(URLS.QUIZQUESTIONS, data);
  }

  deleteQuestions(data) {
    return BaseApi.getWithParams(URLS.QUIZDELETEQUESTION, data).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Question Deleted Successfully');
      }
      return res;
    });
  }

  createQuiz(formData) {
    return BaseApi.postFormData(URLS.MANAGEQUIZ, formData).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Quiz Created Successfully');
      }
      return res;
    });
  }

  updateQuiz(formData) {
    return BaseApi.postFormData(URLS.MANAGEQUIZ, formData).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Quiz Updated Successfully');
      }
      return res;
    });
  }

  createQuestions(formData) {
    return BaseApi.postFormData(URLS.MANAGEQUESTIONS, formData).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Question Created Successfully');
      }
      return res;
    });
  }

  updateQuestions(formData) {
    return BaseApi.postFormData(URLS.MANAGEQUESTIONS, formData).then(res => {
      if (res.status === 200) {
        addSuccessMsg('Question Updated Successfully');
      }
      return res;
    });
  }

  // Student Side

  student_startQuiz(data) {
    return BaseApi.getWithParams(URLS.QUIZSTART, data);
  }

  student_quizAttempt(data) {
    return BaseApi.postFormData(URLS.QUIZATTEMPT, data);
  }

  student_quizResult(data) {
    return BaseApi.postFormData(URLS.QUIZRESULT, data);
  }
}

export default new QuizApi();
