import config from 'react-native-config';
const BASE_URL = config.BASE_URL;
const API_URL = config.APIURL;
const URLS = {
  BASE_URL: BASE_URL,

  LOGIN: API_URL + 'Login.php',
  CHANGEPASSWORD: API_URL + 'changePassword.php',

  GETCLASS: API_URL + 'classFetch.php',
  GETSUBJECT: API_URL + 'subjectFetch.php',
  SHOWSUBJECT: API_URL + 'showSubjects.php',

  MANAGECLASS: API_URL + 'ManageClass.php',
  DELETECLASS: API_URL + 'deleteClass.php',
  MANAGESUBJECTS: API_URL + 'ManageSubjects.php',
  DELETESUBJECTS: API_URL + 'deleteSubjects.php',

  SHOWCIRCULARS: API_URL + 'showCirculars.php',
  MANAGECIRCULARS: API_URL + 'manageCirculars.php',
  DELETECIRCULARS: API_URL + 'deleteCirculars.php',

  MANAGEDOCUMENTS: API_URL + 'manageDocuments.php',
  SHOWDOCUMENTS: API_URL + 'showDocuments.php',
  DELETEDOCUMENTS: API_URL + 'deleteDocuments.php',

  SHOWLIVECLASSES: API_URL + 'showLiveclasses.php',
  MANAGELIVECLASSES: API_URL + 'manageLiveClasses.php',
  DELETELIVECLASSES: API_URL + 'deleteLiveClasses.php',
  LIVECLASSACTIVATION: API_URL + 'liveClassesActivation.php',

  QUIZFETCH: API_URL + 'quizFetch.php',
  MANAGEQUIZ: API_URL + 'manageQuiz.php',
  MANAGEQUESTIONS: API_URL + 'manageQuestions.php',
  QUIZATTEMPTS: API_URL + 'QuizAttempts.php',
  DELETEATTEMPT: API_URL + 'DeleteAttempt.php',
  QUIZDELETE: API_URL + 'quizDelete.php',
  QUIZQUESTIONS: API_URL + 'questionFetch.php',
  QUIZDELETEQUESTION: API_URL + 'deleteQuestions.php',

  STUDENTUPLOAD: API_URL + 'StudentUpload.php',
  SHOWSTUDENTS: API_URL + 'ShowStudents.php',
  DELETESTUDENT: API_URL + 'deleteChildrens.php',
  UPDATESTUDENT: API_URL + 'updateStudents.php',

  SHOWLECTURES: API_URL + 'showLectures.php',
  MANAGELECTURES: API_URL + 'manageLectures.php',
  DELETELECTURES: API_URL + 'deleteLecture.php',

  ADDTEACHERS: API_URL + 'TeacherUpload.php',
  SHOWTEACHERS: API_URL + 'showTeachers.php',
  DELETETEACHERS: API_URL + 'deleteTeachers.php',
  UPDATETEACHERS: API_URL + 'updateTeachers.php',

  UPDATEPROFILE: API_URL + 'UpdateProfile.php',
  UPDATELOGIN: API_URL + 'UpdateLogin.php',

  MANAGEASSIGNMENT: API_URL + 'manageAssignment.php',
  SHOWASSIGNMENTS: API_URL + 'showAssignments.php',
  DELETEASSIGNMENT: API_URL + 'deleteAssignments.php',
  CHECKASSIGNMENT: API_URL + 'checkAssignments.php',
  APPROVEASSIGNMENT: API_URL + 'approveAssignment.php',
  ENABLEASSIGNMENT: API_URL + 'assignmentEnable.php',

  USERACTIVATION: API_URL + 'userActivation.php',

  GETATTENDANCE: API_URL + 'attendanceView.php',
  MARKATTENDANCE: API_URL + 'attendanceMark.php',
  FETCHLEAVES: API_URL + 'attendanceFetchLeaves.php',
  APPROVELEAVE: API_URL + 'attendanceApproveLeave.php',

  RESULTUPLOAD: API_URL + 'resultUpload.php',
  DELETERESULT: API_URL + 'resultDelete.php',

  CONVERSATION: API_URL + 'conversation.php',
  CONVERSATIONMESSAGE: API_URL + 'conversationMessage.php',

  MIGRATESTUDENTS: API_URL + 'migrateStudents.php',

  SHOWSESSION: API_URL + 'session.php',

  SEMESTER: API_URL + 'semester.php',

  EXAM: API_URL + 'exam.php',

  QUESTIONPAPER: API_URL + 'questionPaper.php',

  ANSWERSHEET: API_URL + 'answerSheet.php',

  ALLOTTMENT: API_URL + 'sheetAllottment.php',

  MARKING: API_URL + 'sheetMarking.php',

  //StudentSide
  LIVECLASSESTITLE: API_URL + 'studentapi/LiveClassesTitle.php',
  USERPROFILE: API_URL + 'studentapi/UserProfile.php',

  LIVECLASSATTENDANCE: API_URL + 'studentapi/liveclassAttendance.php',

  QUIZSTART: API_URL + 'studentapi/questionFetch.php',
  QUIZATTEMPT: API_URL + 'studentapi/quizAttempt.php',
  QUIZRESULT: API_URL + 'studentapi/quizResult.php',

  UPLOADASSIGNMENT: API_URL + 'studentapi/uploadAssignment.php',

  COUNT: API_URL + 'studentapi/Count.php',
  DASHBOARDUPDATES: API_URL + 'studentapi/Dashboard.php',
  TEACHERDASHBOARDUPDATES: API_URL + 'TeachDashboard.php',

  VIEWATTENDANCE: API_URL + 'studentapi/attendanceView.php',
  SUBMITLEAVE: API_URL + 'studentapi/attendanceLeaveApply.php',

  VIEWRESULT: API_URL + 'studentapi/resultView.php',
};

export default URLS;
