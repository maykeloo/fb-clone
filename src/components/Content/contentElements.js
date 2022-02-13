import styled from 'styled-components'

export const MainContentX = styled.main`
    width: 80vw;
    margin: 0 auto;
    height: 100px;
    padding: 15px 25px;
    display: flex;
    gap: 40px;

    @media screen and (max-width: 1400px) {
        width: 95vw;
    }

    @media screen and (max-width: 650px) {
        padding: 0px;
        margin: 0 auto;
    }
`