import React from 'react'
import { Avatar, Bottom, Button, ButtonText, Container, FeelIcon, Input, PhotoIcon, Top, VideoIcon } from './searchbarElements'
import avatar from '../../../avatar.jpg'

const SearchBar = () => {
  return (
    <>
        <Container>
            <Top>
                <Avatar src={avatar}/>
                <Input placeholder="What's happening..."/>
            </Top>
            <Bottom>
                <Button><VideoIcon/><ButtonText>Live Video</ButtonText></Button>
                <Button><PhotoIcon/><ButtonText>Photo/Video</ButtonText></Button>
                <Button><FeelIcon/><ButtonText>Feeling/Activity</ButtonText></Button>
            </Bottom>
        </Container>
    </>
  )
}

export default SearchBar