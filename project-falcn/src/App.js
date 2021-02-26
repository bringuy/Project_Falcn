import { React, useEffect, useState } from 'react'
import HomePage from './Components/HomePage/HomePage'
import SchoolForm from './Components/SchoolForm/SchoolForm'

//function to get schools from database
//hook whenever a new thing is added/new thing is created

const App = () => {

  const [titleString, setTitleString] = useState('')
  const [pageNum, setPageNum] = useState(0) //0 for home, 1 SchoolForm form
  const [schoolToEdit, setSchoolToEdit] = useState({})

  //call this to render form page
  const openForm = (title, schoolObj) => {
    setTitleString(title)
    setPageNum(1)
    setSchoolToEdit(schoolObj)
  }

  //call this to render home page
  const openHome = async () => {
    setPageNum(0)
  }

  return (
    pageNum == 0 ?
      <HomePage openForm={openForm}></HomePage>
      :
      <SchoolForm school={schoolToEdit} title={titleString} openHome={openHome}></SchoolForm>
  );
}

export default App;
