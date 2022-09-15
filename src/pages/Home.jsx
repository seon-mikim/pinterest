import React, { useState } from "react";
import Btn from "../components/Btn";
import Header from "../components/Header";
import HeaderUser from "../components/HeaderUser"
import Login from "./Login";
import Join from "./Join";
import { useNavigate } from "react-router-dom";

import Mainboard from "../components/Mainboard";
import unsplash from "../api/unsplash";
import { useEffect } from "react";

const Home = () => {
  const isLogin = localStorage.getItem('Token')
  const [pins, setNewPins] = useState([]);
  const getImage = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
    });
  };
  const onSearchSubmit = (term) => {
    getImage(term).then((res) => {
      let results = res.data.results;

      let newPins = [...results, ...pins];

      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    });
  };

  const getNewPin = () => {
    let promises = [];
    let pinData = [];

    let pins = ["ocean", "Korea", "cats", "dogs"];

    pins.forEach((pinTerm) => {
      promises.push(
        getImage(pinTerm).then((res) => {
          let results = res.data.results;

          pinData = pinData.concat(results);

          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      setNewPins(pinData);
    });
  };
  useEffect(() => {
    getNewPin();
  }, []);
 

  const [modal1, setModal1] = useState(false);

  const [modal2, setModal2] = useState(false);
  const onClickButton = () => {
    setModal1(true);
  };
  const onClickButton2 = () => {
    setModal2(true);
  };

  return (
    <div>
       {isLogin? <HeaderUser onSubmit={onSearchSubmit}/>: <Header
        leftChild={<Btn text={"로그인"} onClick={onClickButton} type={"red"} />}
        rightChild={
          <Btn text={"가입하기"} type={"default"} onClick={onClickButton2} />
        }
      />}
      <Mainboard pins={pins} />
      {modal1 && (
        <Login
          modal1={modal1}
          onClose={() => {
            setModal1(false);
          }}
        />
      )}
      {modal2 && (
        <Join
          modal2={modal2}
          onClose={() => {
            setModal2(false);
          }}
        />
      )}
    </div>
  );
};

export default Home;
