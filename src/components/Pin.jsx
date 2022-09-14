import React from "react";
import styled from "styled-components";

const Pin = (props) => {
    let {pin} =props;
    
  return (
    <Wrapper>
      <Container>
        <img src={pin.image} alt="pin" />
      </Container>
    </Wrapper>
  );
};

export default Pin;

const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;

  img {
    display: flex;
    width: 100%;
    border-radius: 16px;
    object-fit: cover;

    &:hover{
      cursor: pointer;
      filter:brigtness;
    }
  }
`;
