import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
//Redux and Routes
// update du lieu search hien tai
import { fetchSearch } from "../actions/gamesAction";
// gui du lieu len reducer
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  //grab value in input
  const [textInput, setTextInput] = useState();

  // grab value what user write text
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCH" });
  };

  return (
    <StyledNav>
      <StyledLogo onClick={clearSearch}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </StyledLogo>
      <form action="">
        <input onChange={inputHandler} type="text" name="" id="" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  text-align: center;
  padding: 3rem 5rem;
  form {
    input {
      width: 30%;
      font-size: 1.5rem;
      padding: 0.5rem;
      border: none;
      margin-top: 1rem;
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    }
    button {
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem 2rem;
      background: #ff7676;
      color: white;
      border: none;

      transition: all 0.5s ease;
      &:hover {
        background-color: #23d997;
        color: white;
      }
    }
  }
`;

const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;

  img {
    width: 2rem;
    height: 2rem;
  }
`;

export default Nav;
