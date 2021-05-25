import React from 'react'
import {NativeEventEmitter} from 'react-native'
import ZoomUs, {ZoomEmitter} from 'react-native-zoom-us'
import {addLoader, removeLoader, addErrorMsg} from '../utils/Utils'
import MESSAGES from '../constants/Messages'

const zoomEmitter = new NativeEventEmitter(ZoomEmitter)

class ZoomViewer extends React.Component {
  async componentDidMount() {
    addLoader()
    const {route, navigation} = this.props
    const {userName, meetingNumber, password} = route.params
    await ZoomUs.initialize({
      clientKey: 'Rh9Ex2LKhzfIK9qLNBostLvYafWMC4kcTBcz',
      clientSecret: 'FE4bGsfqOG9jowYfOHOXuicGBcRh88kryB6H'
    })
    await ZoomUs.joinMeeting({
      userName,
      meetingNumber,
      password,
      noVideo: true,
      noInvite: true,
      noBottomToolbar: false,
      noPhoneDialIn: true,
      noPhoneDialOut: true,
      noMeetingEndMessage: true,
      noShare: true,
      noTitlebar: true
    })
    removeLoader()

    zoomEmitter.addListener('Auth', authEvent => {
      // Note that the listener will receive an object with an `event` property
      console.log(`Event: "${authEvent.event}"`)
      // Will print one of the following:
      //   Event: "clientIncompatible"
      //   Event: "success"
      //   Event: "accountNotEnableSDK"
      //   Event: "accountNotSupport"
      //   Event: "keyOrSecretEmpty"
      //   Event: "keyOrSecretWrong"
      //   Event: "networkIssue"
      //   Event: "none"
      //   Event: "overTime"
      //   Event: "serviceBusy"
      //   Event: "unknown"
      //   Event: "deviceNotSupported"
      //   Event: "illegalAppKeyOrSecret"
      //   Event: "invalidArguments"
      //   Event: "networkUnavailable"
    })

    // Handle Meeting events
    zoomEmitter.addListener('Meeting', meetingEvent => {
      // Note that the listener will receive an object with an `event` property
      console.log(`Event: "${meetingEvent.event}"`)
      if (
        meetingEvent.event === 'meetingOver' ||
        meetingEvent.event === 'meetingNotExist' ||
        meetingEvent.event === 'removedByHost' ||
        meetingEvent.event === 'incorrectMeetingNumber' ||
        meetingEvent.event === 'endedByHost' ||
        meetingEvent.event === 'endedBySelf' ||
        meetingEvent.event === 'endedRemovedByHost' ||
        meetingEvent.event === 'endedUnknownReason' ||
        meetingEvent.event === 'endedConnectBroken'
      ) {
        addErrorMsg(MESSAGES.LIVECLASS.CONNECT_ERROR)
        navigation.goBack()
      }
      // Will print one of the following ("ended*" events specifically identify the reason for a meeting
      // ending):
      //   Event: "invalidArguments"
      //   Event: "meetingClientIncompatible"
      //   Event: "meetingLocked"
      //   Event: "meetingNotExist"
      //   Event: "meetingOver"
      //   Event: "meetingRestricted"
      //   Event: "meetingRestrictedJBH"
      //   Event: "meetingUserFull"
      //   Event: "mmrError"
      //   Event: "networkError"
      //   Event: "noMMR"
      //   Event: "registerWebinarDeniedEmail"
      //   Event: "registerWebinarEnforceLogin"
      //   Event: "registerWebinarFull"
      //   Event: "registerWebinarHostRegister"
      //   Event: "registerWebinarPanelistRegister"
      //   Event: "removedByHost"
      //   Event: "sessionError"
      //   Event: "success"
      //   Event: "audioAutoStartError"
      //   Event: "cannotEmitWebRequest"
      //   Event: "cannotStartTokenExpire"
      //   Event: "inAnotherMeeting"
      //   Event: "invalidUserType"
      //   Event: "joinWebinarWithSameEmail"
      //   Event: "meetingNotStart"
      //   Event: "passwordError"
      //   Event: "reconnectError"
      //   Event: "vanityNotExist"
      //   Event: "vbMaximumNum"
      //   Event: "vbNoSupport"
      //   Event: "vbRemoveNone"
      //   Event: "vbSaveImage"
      //   Event: "vbSetError"
      //   Event: "videoError"
      //   Event: "writeConfigFile"
      //   Event: "zcCertificateChanged"
      //   Event: "unknown"
      //   Event: "exitWhenWaitingHostStart"
      //   Event: "incorrectMeetingNumber"
      //   Event: "invalidStatus"
      //   Event: "networkUnavailable"
      //   Event: "timeout"
      //   Event: "webServiceFailed"
      //   Event: "endedByHost"
      //   Event: "endedByHostForAnotherMeeting"
      //   Event: "endedBySelf"
      //   Event: "endedConnectBroken"
      //   Event: "endedFreeMeetingTimeout"
      //   Event: "endedJBHTimeout"
      //   Event: "endedRemovedByHost"
      //   Event: "endedUnknownReason"
      //   Event: "endedNoAttendee"
    })
  }

  render() {
    return null
  }
}

export default ZoomViewer
