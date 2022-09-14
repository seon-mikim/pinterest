import React from "react";
import { useState } from "react";
import styled from "styled-components";
import PinterestIcon from "@mui/icons-material/Pinterest";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import "./style.css";
import { useNavigate } from "react-router-dom";

const Header = (props, { headerText, leftChild, rightChild, firstChild }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(input);
  };
  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </LogoWrapper>
      <HomePageButton onClick={navigate("/")}>홈</HomePageButton>
      <MakingButton>
        만들기
       
       
      </MakingButton>

      <SearchWrapper>
        <SearchBarWrap>
          <IconButton>
            <SearchIcon/>
          </IconButton>
          <form>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button type="sumbit" onClick={onSearchSubmit}></button>
          </form>
        </SearchBarWrap>
      </SearchWrapper>
      {/*
      <IconWrapper>

      </IconWrapper>  */}
      <h1>{headerText}</h1>

      <div className="head_btn-home">{firstChild}</div>

     

      <div className="head_btn_left">{leftChild}</div>
      <div className="head_btn_right">{rightChild}</div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;
const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;

  }
`;

const HomePageButton = styled.button`
  display: flex;
  width: 50px;
  min-width: 50px;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  font-weight: 600;
  padding: 10px 25px;

`;
const MakingButton = styled.button`
  display: flex;
  width: 100px;
  min-width: 100px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;

 
`;



const SearchWrapper = styled.div`
  flex: 1;
`;
const SearchBarWrap = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
  }

  form > button {
    display: none;
  }

  input:focus {
    outline: none;
  }

  input:active {
    outline: none;
  }
`;
