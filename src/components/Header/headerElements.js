import styled from "styled-components";
import {RiHomeSmile2Fill, RiArrowDropDownLine} from 'react-icons/ri'
import {HiLightningBolt, HiBell} from 'react-icons/hi'
import {FaEnvelope} from 'react-icons/fa'
import {CgMenuGridO} from 'react-icons/cg'

import { motion } from 'framer-motion'


export const HeaderX = styled.header`
    width: 80%;
    margin: 0 auto;
    height: 75px;
    display: flex;
    justify-content: space-between;
    padding: 15px 25px;

    @media screen and (max-width: 1400px) {
        width: 90%;
    }

    @media screen and (max-width: 650px) {
        padding: 5px;
    }
`

export const SearchBarContent = styled.div`
    height: 100%;
    margin-left: 10px;
    display: flex;
    align-items: center;
    gap: 30px;
`

export const Navbar = styled.nav`
    height: 100%;
    display: flex;
    gap: 30px;
    align-items: center;

    @media screen and (max-width: 1100px) {
        gap: 10px;       
    }
`

export const Logo = styled.span`
    color: #00acee;
    font-size: 30px;
    font-family: 'Pacifico', serif;
    cursor: pointer;
`

export const SearchBar = styled.input`
    background: var(--primaryColor);
    border: 0;
    padding: 7.5px 10px;
    border-radius: 10px;
    width: 240px;
    outline: none;
    color: var(--text);

    &::placeholder {
        color: var(--text);
    }

    @media screen and (max-width: 650px) {
        width: 35vw;       
    }
`

export const NavigationBox = styled.div`
    height: 100%;
    padding-right: 30px;
    display: flex;
    border-right: 1px solid grey;
    align-items: center;
    gap: 10px;

    @media screen and (max-width: 1100px) {
        display: none;
    }
`

export const IconBox = styled(motion.button)`
    background-color: transparent;
    width: 50px;
    transition: 0.3s;
    display: flex;
    border: 0;
    border-radius: 40px;
    position: relative;
    align-items: center;
    cursor: pointer;

    &:hover {
        > svg {
        color: #4361ee;
    }
    }

`

export const IconText = styled(motion.span)`
    color: var(--text);
    position: absolute;
    right: 20px;
`

export const HomeIcon = styled(RiHomeSmile2Fill)`
    width: 26px;
    height: 26px;
    color: var(--text);
    cursor: pointer;
    transform: 0.3s;
`

export const BoltIcon = styled(HiLightningBolt)`
    width: 26px;
    height: 26px;
    color: var(--text);
    cursor: pointer;
    transform: 0.3s;

`

export const BellIcon = styled(HiBell)`
    width: 26px;
    height: 26px;
    color: var(--text);
    cursor: pointer;
    transform: 0.3s;

`
export const EnvIcon = styled(FaEnvelope)`
    width: 26px;
    height: 26px;
    color: var(--text);
    cursor: pointer;
    transform: 0.3s;
`

export const PersonBox = styled.div`
    padding: 7.5px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    padding-left: 7.5px;
    background-color: var(--secondaryColor);
    gap: 15px;
    cursor: pointer;

    @media screen and (max-width: 1100px) {
        padding: 5px;
    }
`

export const Avatar = styled.img`
    border-radius: 50%;
    height: 35px;
    width: 35px;
    object-fit: cover;

`

export const Name = styled.span`
    color: var(--text);
    
    @media screen and (max-width: 1100px) {
        display: none;
    }
`

export const ArrowIcon = styled(RiArrowDropDownLine)`
    color: var(--text);
    font-size: 30px;
    cursor: pointer;
    
    @media screen and (max-width: 1100px) {
        display: none;
    }
`
export const MobileMenu = styled.div`
    display: none;

    @media screen and (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        gap: 7px;
    }
`

export const Line1 = styled.span`
    display: block;
    width: 30px;
    height: 3px;
    background: var(--text);
    border-radius: 10px;
`
export const Line2 = styled.span`
    display: block;
    width: 30px;
    height: 3px;
    background: var(--text);
    border-radius: 10px;
`
export const Line3 = styled.span`
    display: block;
    width: 30px;
    height: 3px;
    background: var(--text);
    border-radius: 10px;
`

export const MenuIcon = styled(CgMenuGridO)`
    display: flex;
    color: var(--text);
    font-size: 28px;
    margin-left: 10px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: rotate(90deg);
    }

    @media screen and (max-width: 1400px) {
        display: block;
    }
`
