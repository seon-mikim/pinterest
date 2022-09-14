import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import PinterestIcon from "@mui/icons-material/Pinterest";
import DropDown from "../components/DropDown/DropDown"
import {logout} from "../redux/modules/Login"
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { useNavigate } from "react-router-dom";

const HeaderUser = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const siteLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
        dispatch(logout());
        navigate("/", {replace: true});
    } else {
        console.log("로그인 유지");
    }
};

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
      <HomePageButton>홈</HomePageButton>
      <MakingButton>만들기</MakingButton>

      <SearchWrapper>
        <SearchBarWrap>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button type="sumbit" onClick={onSearchSubmit}></button>
          </form>
        </SearchBarWrap>
      </SearchWrapper>
      <LogOutBtn onClick={siteLogout}>로그아웃</LogOutBtn>

      
    </Wrapper>
  );
};

export default HeaderUser;

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
  width: 90px;
  min-width: 90px;
  background-color: transparent;
  color: black;
  border: none;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  font-weight: 600;
  padding: 10px 25px;
`;

const SearchWrapper = styled.div`
  flex: 1;
`;
const SearchBarWrap = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 98%;
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


const LogOutBtn = styled.button`
    cursor: pointer;
    border: none;
    width: 100px;
    border-radius: 20px;
    background-color:  #e60023;
    height: 40px;
    padding: 8px 12px;
    font-size: 20px;
    word-spacing: normal;
    font-size: 16px;
    color: white;
    margin-right: 10px;
    font-weight: 600;
`