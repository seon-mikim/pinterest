import React from 'react'
import Pin from './Pin' 
import styled from 'styled-components'
const MasonryLayout = () => {
  return (
    <StContainer>
        <Pin size='small'/>
        <Pin size='medium'/>
        <Pin size='large'/>
        <Pin size='small'/>
        <Pin size='medium'/>
        <Pin size='large'/>
        <Pin size='small'/>
        <Pin size='medium'/>
        <Pin size='large'/>
        <Pin size='small'/>
        <Pin size='medium'/>
        <Pin size='large'/>
        <Pin size='small'/>
        <Pin size='medium'/>
        <Pin size='large'/>
        
    </StContainer>
  )
}

const StContainer = styled.div`
   
      margin:0;
      padding:0;
      width:100vw;
      position:absolute;
      left:50%;
      transform:translateX(-50%);
      display:grid;
      grid-template-columns:repeat(auto-fill, 250px);
      grid-auto-rows:10px;
      justify-content:center;
`

export default MasonryLayout