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
                <Title>제목이 옵니다</Title>
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
    width: 100%;
    height: 96%;
    background-color: black;
    border-radius: 8px;
    padding: 15px;
   
    position: relative;
`

const Title = styled.h1`
 padding-left: 50px;
`