import React from "react";
import styled from "styled-components";
import PinterestIcon from "@mui/icons-material/Pinterest";
import IconButton from "@mui/material/IconButton";

import "./style.css";

const Header = ({ leftChild, rightChild }) => {
  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
		pintrest
      </LogoWrapper>
		<LoginJoinArea>
			<div className="head_btn_left">{leftChild}</div>
			<div className="head_btn_right">{rightChild}</div>
		</LoginJoinArea>
      
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;
const LogoWrapper = styled.div`
	padding: 8px 0;
	color:#e60023;
	font-weight: 600;
	font-size: 20px;
	
	.css-78trlr-MuiButtonBase-root-MuiIconButton-root{
		padding: 8px 0;
	}
  
	.MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;

const LoginJoinArea = styled.div`
	display: flex;
	div{
		margin-left: 10px;
	}
`

