import React, {useEffect, useState} from 'react'
import {createdDateTime, getUserClasses} from '../../../utils/Utils'
import ContentList from '../../../common/ContentList'
import LiveClassApi from '../../../apis/LiveClassApi'

export default function LiveClassList({route, navigation}) {
  const [liveClassList, setLiveClassList] = useState(null)
  useEffect(() => {
    const data = {
      classId: getUserClasses(),
      sort: 0
    }
    LiveClassApi.getLiveClasses(data).then(response => {
      setLiveClassList(response.data)
    })
  }, [])

  const handlePress = pdfSource => {
    navigation.push('zoomview', {userName: '', meetingNumber: '', password: ''})
  }

  return (
    <ContentList
      data={liveClassList}
      dataId="LC_ID"
      dataColumns={['Title', 'S_Name', 'Date', 'Time']}
      handlePress={handlePress}
    />
  )
}
