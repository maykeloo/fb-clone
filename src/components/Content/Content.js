import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { MainContentX } from './contentElements'
import MainContent from '../MainContent/MainContent'

const Content = () => {
  return (
    <>
        <MainContentX>
          <Sidebar/>
          <MainContent/>
        </MainContentX>
    </>
  )
}

export default Content