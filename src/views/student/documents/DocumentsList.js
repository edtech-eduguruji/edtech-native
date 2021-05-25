import React, {useEffect, useState} from 'react'
import DocumentsApi from '../../../apis/DocumentsApi'
import {createdDateTime} from '../../../utils/Utils'
import ContentList from '../../../common/ContentList'

export default function DocumentsList({route, navigation}) {
  const {subjectId} = route.params
  const [documentList, setDocumentList] = useState(null)
  useEffect(() => {
    const data = {
      subjectId
    }
    DocumentsApi.getDocuments(data).then(response => {
      setDocumentList(
        response.data.map(item => {
          item.DateTime = createdDateTime(item.DateTime, 1)
          return item
        })
      )
    })
  }, [subjectId])

  const handlePress = pdfSource => {
    navigation.push('pdfview', {pdfSource})
  }

  return (
    <ContentList
      data={documentList}
      dataId="PDF"
      dataColumns={['Title', 'Description', 'DateTime']}
      handlePress={handlePress}
    />
  )
}
