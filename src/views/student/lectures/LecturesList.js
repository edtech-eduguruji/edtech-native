import React, {useEffect, useState} from 'react'
import LecturesApi from '../../../apis/LecturesApi'
import {createdDateTime} from '../../../utils/Utils'
import ContentList from '../../../common/ContentList'

export default function LecturesList({route, navigation}) {
  const {subjectId} = route.params
  const [lectureList, setLectureList] = useState(null)
  useEffect(() => {
    const data = {
      subjectId
    }
    LecturesApi.getLectures(data).then(response => {
      setLectureList(
        response.data.map(item => {
          item.DateTime = createdDateTime(item.DateTime, 1)
          return item
        })
      )
    })
  }, [subjectId])

  const handlePress = pdfSource => {
    navigation.push('lectureview', {pdfSource})
  }

  return (
    <ContentList
      data={lectureList}
      dataId="PDF"
      dataColumns={['Title', 'Description', 'DateTime']}
      handlePress={handlePress}
    />
  )
}
