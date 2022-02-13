import styled from 'styled-components'

export const Container = styled.div`
    width: 20%;

    @media screen and (max-width: 1000px) {
        display: none;
    }
`

export const Box = styled.div`
    width: 100%; 
`

export const Card = styled.div`
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
    background: var(--primaryColor);
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
    align-items: center;
`

export const ImagesBar = styled.div`
    width: 100%;
    height: 120px;
    position: relative;
`

export const Avatar = styled.img`
    width: 80px;
    height: 80px;
    bottom: 0;
    object-fit: cover;
    position: absolute;
    border-radius: 50%;
    right: 50%;
    transform: translateX(40px);
`
export const Backgr = styled.img`
    width: 100%;
    object-fit: cover;
    height: 80px;
`

export const Names = styled.div`
    width: 70%;
    margin-top: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Name = styled.span`
    color: var(--text);
    font-size: 22px;

    @media screen and (max-width: 1400px) {
        font-size: 1.5vw;
    }
`

export const ATName = styled.span`
    color: var(--text2);
    font-size: 18px;

    @media screen and (max-width: 1400px) {
        font-size: 1.3vw;
    }
`

export const Motto = styled.span`
    margin-top: 20px;
    text-decoration: underline;
    color: var(--text);
    text-align: center;
    font-size: 14px;

    @media screen and (max-width: 1400px) {
        display: none;
    }
`

export const Colabs = styled.div`
    display: flex;
    margin-top: 20px;
    padding: 10px 0;
    gap: 20px;
    justify-content: space-around;

    @media screen and (max-width: 1400px) {
        display: none;
    }
`

export const ColabBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--secondaryColor);
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
`

export const ColabNumber = styled.span`
    color: var(--text);
`
export const ColabText = styled.span`
    color: var(--text2);
`

export const MyProfile = styled.div`
    margin-top: 20px;
    color: #4361ee;
    text-decoration: underline;
    cursor: pointer;
`