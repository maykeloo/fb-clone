import React from 'react'
import { ATName, Avatar, Backgr, Box, Card, ColabBox, ColabNumber, Colabs, ColabText, Container, ImagesBar, Motto, MPText, MyProfile, Name, Names } from './sidebarElements'

import bg from '../../bg.jpg'
import avatar from '../../avatar.jpg'

const Sidebar = () => {
  return (
    <>
      <Container>
        <Box>
          <Card>
            <ImagesBar>
              <Avatar src={avatar}/>
              <Backgr src={bg}/>
            </ImagesBar>
            <Names>
              <Name>Michał Sukiennik</Name>
              <ATName>@maykeloo</ATName>
              <Motto>
                Everybody kills boredom in a different way. Mine is the front-end.
              </Motto>
            </Names>
            <Colabs>
              <ColabBox>
              <ColabNumber>6,664</ColabNumber>
              <ColabText>Following</ColabText>
              </ColabBox>
              <ColabBox>
              <ColabNumber>9,991</ColabNumber>
              <ColabText>Followers</ColabText>
              </ColabBox>
            </Colabs>
            <MyProfile>
                My profile
            </MyProfile>
          </Card>
        </Box>
      </Container>
    </>
  )
}

export default Sidebar