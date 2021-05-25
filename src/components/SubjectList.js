import React, {useState, useEffect} from 'react'
import CommonApi from '../apis/CommonApi'
import {getUserClasses, getUserSubject} from '../utils/Utils'
import ContentList from '../common/ContentList'

const SubjectList = props => {
  const {navigation, screenName} = props
  const [subjectData, setSubjectData] = useState([])
  const handlePress = subjectId => {
    navigation.push(screenName, {subjectId})
  }

  useEffect(() => {
    const data = {
      t1: getUserClasses(),
      t2: 1,
      subject: getUserSubject()
    }
    CommonApi.getSubjectByClassId(data).then(res => {
      setSubjectData(res.data)
    })
  }, [])

  return (
    <ContentList
      data={subjectData}
      dataId="Subject_ID"
      dataColumns={['Subject_Name', 'Count']}
      handlePress={handlePress}
    />
  )
}

export default SubjectList
