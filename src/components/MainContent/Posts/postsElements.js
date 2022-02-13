import styled from 'styled-components'

export const Container = styled.div`
    width: 40vw;
    padding: 20px;
    margin: 0 auto;
    margin-top: 160px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Box = styled.div`
    width: 100%;
    background: var(--primaryColor);
    padding: 20px;
    border-radius: 15px;
`

export const Left = styled.div`
    width: 15%;
`

export const Right = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column; 
`
