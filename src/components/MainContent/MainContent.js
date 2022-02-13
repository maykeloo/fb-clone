import React from 'react'
import { Box, Card, Container } from './mcElements'
import Posts from './Posts/Posts'
import SearchBar from './SearchBar/SearchBar'

const MainContent = () => {
  return (
    <>
        <Container>
            <Box>
                <Card>
                    <SearchBar/>
                </Card>
            </Box>
            <Posts/>
        </Container>
    </>
  )
}

export default MainContent