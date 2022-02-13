import styled from 'styled-components'
import {HiOutlineVideoCamera, HiOutlinePhotograph} from 'react-icons/hi'
import {BsEmojiSmile} from 'react-icons/bs'

export const Container = styled.div`
    width: 40%;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    backdrop-filter: blur(40px);
`
export const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
`

export const Avatar = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
`

export const Input = styled.input`
    flex-grow: 1;
    border-radius: 15px;
    background: var(--secondaryColor);
    outline: none;
    border: 0;
    padding: 0 20px; 
    font-size: 18px;
    color: var(--text);

    &::placeholder {
        color: var(--text2);
    }

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`

export const Bottom = styled.div`
    width: calc(100% - 80px);
    display: flex;
    margin-top: 20px;
    justify-content: space-between;

`
export const Button = styled.button`
    width: 30%;
    background: var(--blue);
    padding: 10px 0;
    border: 0;
    border-radius: 7.5px;
    cursor: pointer;
    color: var(--text);
    border: 1px solid var(--blue);
    transition: 0.15s;
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 10px;

    &:hover {
        background: transparent;
    }
`
export const ButtonText = styled.span`
    
    @media screen and (max-width: 950px) {
        display: none;
    }
`

export const VideoIcon = styled(HiOutlineVideoCamera)`
    font-size: 18px;
`
export const PhotoIcon = styled(HiOutlinePhotograph)`
    font-size: 18px;
`
export const FeelIcon = styled(BsEmojiSmile)`
    font-size: 18px;
`
