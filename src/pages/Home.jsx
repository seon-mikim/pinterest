import React,{useState} from 'react'
import Btn from '../components/Btn'
import Header from '../components/Header'
import Login from './Login'
import Join from './Join'

const Home = () => {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  return (
    <div>
        <Header leftChild={<Btn text={'로그인'} onClick={()=>{setModal1(true)}} type={'red'}/>} rightChild={<Btn text={'가입하기'} type={'default'} onClick={()=>{setModal2(true)}}/>}/>
        {modal1 === true? <Login/>: null}
        {modal2 === true? <Join/>: null}
    </div>
  )
}

export default Home