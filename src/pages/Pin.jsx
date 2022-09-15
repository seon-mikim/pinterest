import React from "react";
import styled from "styled-components";
import ButtonBox from "../components/pinpage/PinButtonBox";
import HeaderUser from "../components/HeaderUser";
import PinImage from "../components/pinpage/PinImage"

const Pin = () => {
  
  return (
    <>
      <HeaderUser />
      <Background>
        <MainWrapper>
          <Container>
            <Shadow>
              <LeftSide>
                <ImgWrap></ImgWrap>
              </LeftSide>
              <RightSide>
                <ButtonBox />
                <InfoArea>
                  <Title>제목이 옵니다</Title>
                  <Des>설명이 들어옵니다</Des>
                  <UserArea>
                    <UserImage></UserImage>
                    <UserName>유저이름</UserName>
                  </UserArea>
                </InfoArea>
                
              </RightSide>
            </Shadow>
          </Container>
        </MainWrapper>
      </Background>
    </>
  );
};

export default Pin;

const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: white;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 0;
`;

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-width: 1016px;
`;

const Shadow = styled.div`
  display: flex;
  width: 100%;
  height: 700px;
  margin-top: 20px;
  box-shadow: rgb(0 0 0 / 10%) 0 1px 20px 0px;
  background-color: white;
  border-radius: 32px;
`;

const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  img {
    display: flex;
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
  }
`;

const RightSide = styled.div`
  width: 100%;
  height: 100%;
`;

const ImgWrap = styled.div`
    width: 97%;
    height: 96%;
    background-color: black;
    border-radius: 32px;
    padding: 15px;
   
    position: relative;
`

const InfoArea = styled.div`
  width: 100%;
`

const Title = styled.h1`
 padding-left: 50px;
`

const Des = styled.p`
  padding-left: 50px;
`

const UserArea = styled.div`
  padding-left: 50px;
 
`

const UserImage = styled.div`
  height: 50px;
  width: 50px;
  margin-right: 10px;
  border-radius: 100%;
  background-color: #ececec;
  float: left;
`
const UserName = styled.span`
   
   text-align: center;
   align-items: center;
   justify-content: center;
`