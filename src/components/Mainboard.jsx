import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { __getList } from '../redux/modules/PinList'
import Pin from './Pin'
import styled from 'styled-components'
import './MainBoard.css'


const Mainboard = (props) => {
  
  const dispatch = useDispatch();
  const pinlist = useSelector((state) => state.pinlist.pinlist);

  console.log(pinlist?.content)

  useEffect(() => {
    dispatch(__getList());
  }, []);

  
  let {pins} = props

  return (
    <Wrapper>
        <Container className="mainboard__container">
          {pinlist&&pinlist.content.map((pin,index)=>{
            return<Pin pin={pin} key={index}/>
          })}
           {/* {pins&&pins.map((pin,index)=>{
            let {urls} = pin;
            return<Pin key={index} urls={urls}/>
          })} */}
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
    
    column-gap: 10px;
    margin: 0 auto;
    height: 100%;
  
    background-color: white;
`