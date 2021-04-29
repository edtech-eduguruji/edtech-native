import config from 'react-native-config';

const ROLES_KEY = {};
JSON.parse(config.ROLES).forEach(function (key) {
  ROLES_KEY[key] = key;
});
const ASSETS = {
  url: config.APIURL,
  sheetUrl: config.APIURL + 'examuploads/',
};

const APP = {
  schoolName: config.SCHOOLNAME,
};

const ATTENDANCETYPE = {
  PRESENT: '1',
  ABSENT: '0',
  LEAVE: '2',
  NOTMARKED: '3',
  LEAVEAPPLIED: '4',
};

const LIVECLASSTYPE = {
  ZOOM: '1',
  OTHER: '0',
};

const VIDEOTYPE = {
  YOUTUBE: '0',
  OTHER: '1',
};

const SCAN_STATUS = {
  APPROVED: '1',
  REJECTED: '0',
};

const ANSWER_SHEET = {
  CHECKED: '1',
  NOTCHECKED: '0',
};

const ALLOTTMENT = {
  NO: '0',
  YES: '1',
};

module.exports = {
  APP: APP,
  ROLES_KEY: ROLES_KEY,
  ASSETS: ASSETS,
  LIVECLASSTYPE: LIVECLASSTYPE,
  VIDEOTYPE: VIDEOTYPE,
  ATTENDANCETYPE: ATTENDANCETYPE,
  ANSWER_SHEET: ANSWER_SHEET,
  ALLOTTMENT: ALLOTTMENT,
  SCAN_STATUS: SCAN_STATUS,
};
