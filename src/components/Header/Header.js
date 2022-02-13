import React from "react";
import {
  ArrowIcon,
  Avatar,
  BellIcon,
  BoltIcon,
  EnvIcon,
  HeaderX,
  HomeIcon,
  IconBox,
  IconText,
  Logo,
  MenuIcon,
  Name,
  Navbar,
  NavigationBox,
  PersonBox,
  SearchBar,
  SearchBarContent,
} from "./headerElements";
import avatar from "../../avatar.jpg";
import { motion } from "framer-motion";

const Header = () => {

  const boxMotion = {
    initial: {
      background: "transparent",
      padding: '10px 0',
    },
    hover: {
      width: "150px",
      background: "var(--secondaryColor)",
        padding: '10px 0 10px 15px',
      transition: {
        duration: 0.3,
        type: "spring",
        ease: "easeOut",
      },
    },
  };
  const textMotion = {
    initial: {
      x: 5,
      opacity: 0,
      ease: "easeOut",
      type: "spring",
    },
    hover: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        duration: 0.3,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <HeaderX>
        <SearchBarContent>
          <Logo>Lively</Logo>
          <SearchBar placeholder="# Explore" />
        </SearchBarContent>
        <Navbar>
          <NavigationBox>
            <IconBox variants={boxMotion} initial="initial" whileHover="hover">
              <HomeIcon/>
              <IconText variants={textMotion}>Home</IconText>
            </IconBox>
            <IconBox variants={boxMotion} initial="initial" whileHover="hover">
              <BoltIcon />
              <IconText variants={textMotion}>Bolt</IconText>
            </IconBox>
            <IconBox variants={boxMotion} initial="initial" whileHover="hover">
              <BellIcon />
              <IconText variants={textMotion}>Notifications</IconText>
            </IconBox>
            <IconBox variants={boxMotion} initial="initial" whileHover="hover">
              <EnvIcon />
              <IconText variants={textMotion}>Messages</IconText>
            </IconBox>
          </NavigationBox>
          <MenuIcon/>
          <PersonBox>
            <Avatar src={avatar} />
            <Name>Michał Sukiennik</Name>
            <ArrowIcon />
          </PersonBox>
        </Navbar>
      </HeaderX>
    </>
  );
};

export default Header;
