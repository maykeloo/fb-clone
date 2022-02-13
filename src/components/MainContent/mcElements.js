import styled from 'styled-components'

export const Container = styled.div`
    width: 60%;
    overflow-y: scroll;
    height: 100vh;
    -ms-overflow-style: none;
    scrollbar-width: none; 
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;

    &::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 1000px) {
        width: 75%;
    }

    @media screen and (max-width: 650px) {
        width: 95vw;
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
    align-items: center;
    color: white;
`