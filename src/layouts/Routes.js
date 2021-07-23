import {ROLES_KEY} from '../constants/Constants'
import Dashboard from '../views/student/Dashboard'
import ChangePassword from '../views/ChangePassword'
import Profile from '../views/student/profile/Profile'
import Documents from '../views/student/documents/Documents'
import Lectures from '../views/student/lectures/Lectures'
import LiveClass from '../views/student/liveclass/LiveClass'
import Quiz from '../views/student/quiz/Quiz'
import Assignment from '../views/student/assignment/Assignment'
import Circulars from '../views/student/circulars/Circulars'

const appRoutes = [
  {
    path: '/Dashboard',
    name: 'Dashboard',
    id: 'sDashboard',
    icon: 'dashboard',
    component: Dashboard,
    layout: '/student',
    role: [ROLES_KEY.STUDENT],
    isSidebar: false
  },
  {
    path: '/profile',
    name: 'Profile',
    id: 'sProfile',
    icon: 'person',
    component: Profile,
    layout: '/student',
    role: [ROLES_KEY.STUDENT],
    isSidebar: true
  },
  {
    path: '/changePassword',
    name: 'Change Password',
    id: 'changePassword',
    icon: 'lock',
    component: ChangePassword,
    layout: '/teacher',
    role: [ROLES_KEY.ADMIN, ROLES_KEY.TEACHER, ROLES_KEY.STUDENT],
    isSidebar: true
  },
  {
    path: '/studymaterial',
    name: 'Study Material',
    id: 'sDocument',
    icon: 'insertdrivefile',
    component: Documents,
    layout: '/student',
    role: [ROLES_KEY.STUDENT],
    isSidebar: false
  },
  {
    path: '/lectures',
    name: 'Video Lectures',
    id: 'sLecture',
    icon: 'movie',
    component: Lectures,
    layout: '/student',
    role: [ROLES_KEY.STUDENT],
    isSidebar: false
  },
  {
    path: '/liveclasses',
    name: 'Live Classes',
    id: 'sLiveClass',
    icon: 'OndemandVideo',
    component: LiveClass,
    layout: '/student',
    role: [ROLES_KEY.STUDENT],
    isSidebar: false
  },
  {
    path: '/quizzes',
    name: 'Quiz',
    id: 'sQuiz',
    icon: 'wbincandescent',
    component: Quiz,
    layout: '/student',
    role: [ROLES_KEY.STUDENT],
    isSidebar: false
  },
  {
    path: '/submitAssignment',
    name: 'Assignment',
    id: 'submitAssignment',
    icon: 'assignment',
    component: Assignment,
    layout: '/student',
    role: [ROLES_KEY.STUDENT],
    isSidebar: false
  },
  {
    path: '/circulars',
    name: 'Circulars',
    id: 'sCircular',
    icon: 'update',
    component: Circulars,
    layout: '/student',
    role: [ROLES_KEY.STUDENT],
    isSidebar: false
  }
]

export default appRoutes
