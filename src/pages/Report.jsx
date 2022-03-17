import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Layout from '../components/LayoutNoHeader'
import ReportComponent from '../components/ReportComponent'
import ReportFailed from '../components/ReportFailed'

const Report = () => {
  const [ reportLoaded, setReportLoaded ] = useState(true)
  const [ reportState, setReportState ] = useState('Safe')  // Safe, Caution, Danger
<<<<<<< Updated upstream
=======
  const [ address, setAddress ] = useState()
  const [ data, setData ] = useState({
    joint: false,
    mortgageDanger: '안전',
    buildType: 'JT',
    mortgage: 100000000,
    ownership: '회사',
    isGr2: true,
    eulguDangerList: ['임차권'],
    kapguDangerList: ['가처분'],
  })
>>>>>>> Stashed changes

  return(
    <Layout>
      {reportLoaded &&
        <ReportComponent state={reportState}/>
      }
      {!reportLoaded &&
        <ReportFailed/>
      }
    </Layout>
  )
}

export default Report;