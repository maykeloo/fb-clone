import React from 'react'
import { Avatar } from '../SearchBar/searchbarElements'
import { Box, Container, Left, Right } from './postsElements'
import avatar from '../../../avatar.jpg'
const Posts = () => {
  return (
    <>
      <Container>
        <Box>
          <Left>
            <Avatar src={avatar}/>
          </Left>
          <Right>
            
          </Right>
        </Box>
      </Container>
    </>
  )
}

export default Posts