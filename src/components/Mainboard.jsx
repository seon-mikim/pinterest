import React,{useEffect} from 'react'


import Pin from './Pin'
import styled from 'styled-components'



const Mainboard = (props) => {
  
  let {pins} = props

  return (
    <Wrapper>
        <Container>
          {pins&&pins.map((pin,index)=>{
            let {urls} = pin;
            return<Pin key={index} urls={urls}/>
          })}
          
        </Container>
    </Wrapper>
  )
}

export default Mainboard

const Wrapper = styled.div`
    background-color:white;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 15px;
`

const Container = styled.div`
    
    column-count: 5;
    column-gap: 10px;
    margin: 0 auto;
    height: 100%;
    width: 1300px;
    background-color: white;
`