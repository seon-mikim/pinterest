import React,{useRef, useState} from 'react'
import Btn from '../components/Btn'
import Header from '../components/Header'
import Login from './Login'
import Join from './Join'
import { useNavigate } from 'react-router-dom'
import MasonryLayout from '../components/MasonryLayout'


const Home = () => {
  
  const navigate = useNavigate()
  
  const [modal1, setModal1] = useState(false)
  
  const [modal2, setModal2] = useState(false)
  const onClickButton = () => {
    setModal1(true)
  }
  const onClickButton2 = () => {
    setModal2(true)
  }


  return (
    <div>
        <Header headerText={'pinterest'} firstChild={<Btn text={'홈'}  type={'negative'}onClick={()=> navigate('/')}/>} leftChild={<Btn text={'로그인'} onClick={onClickButton} type={'red'}/>} rightChild={<Btn text={'가입하기'} type={'default'} onClick={onClickButton2}/>}/>
        <MasonryLayout/>
       {modal1&&(<Login modal1={modal1} onClose={()=>{setModal1(false)}}/>)}
       {modal2&&(<Join modal2={modal2} onClose={()=>{setModal2(false)}}/>)}
    </div>
  )
}

export default Home