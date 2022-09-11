import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Btn from "../components/Btn";
import { __login } from "../redux/modules/Login";
import "./style.css";

const Login = ({ onClose }) => {
  const navigate = useNavigate();
  const hanleClose = () => {
    onClose?.();
  };
  const result = useSelector((state) => state.login);
  const dispatch = useDispatch();
  let initialState = {
    email: "",
    password: "",
  };
  const [user, setUeser] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setUeser({ ...user, [name]: value });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(__login(user));
  };

  return (
    <div className="Login-area">
      <div>
        <div className="btn-area">
        <button className="close-btn" onClick={hanleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64">
            <path
              fill="#0a0a0a"
              d="m50.592 2.291c-6.196 6.197-12.397 12.398-18.592 18.593-6.197-6.195-12.396-12.396-18.594-18.593-7.17-7.17-18.284 3.948-11.12 11.12 6.199 6.193 12.4 12.395 18.592 18.592-6.192 6.197-12.393 12.398-18.592 18.592-7.164 7.168 3.951 18.283 11.12 11.12 6.197-6.199 12.396-12.399 18.593-18.594 6.199 6.199 12.395 12.395 18.592 18.594 7.17 7.168 18.287-3.951 11.12-11.12-6.199-6.199-12.396-12.396-18.597-18.594 6.2-6.199 12.397-12.398 18.597-18.596 7.168-7.166-3.949-18.284-11.12-11.11"
            />
          </svg>
        </button>
       </div>
      
        <div className="logo-img-area">
          <svg
            className="logo-img"
            height="32"
            width="32"
            viewBox="0 0 24 24"
            aria-label="Pinterest"
            role="img">
            <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"></path>
          </svg>
        </div>

        
        <div className="Login-title">
          <h1>Pinterest에 오신 것을 환영합니다</h1>
        </div>
        <form className="input-area" onSubmit={onSubmitHandler}>
          <div className="email-input-area">
            <div>이메일</div>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={onChangeHandler}
            />
          </div>
          <div className="pw-input-area">
            <div>비밀번호</div>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={onChangeHandler}
            />
          </div>

          <div className="pw-find">
            <span>비밀 번호를 잊으셨나요?</span>
          </div>
          <div>
            <Btn className="Login-btn" text={"로그인"} type={"red"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
