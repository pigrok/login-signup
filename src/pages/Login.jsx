import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/modules/userSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>로그인 페이지 입니다.</h1>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="이메일을 입력해주세요."
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="비밀번호 입력해주세요."
      />

      <button
        onClick={() => {
          // 로그인 완료

          alert("로그인 되었습니다.");
          dispatch(
            login({
              email: email,
              password: password,
            })
          );
          // 페이지 이동
          navigate("/");
        }}
      >
        로그인
      </button>
    </div>
  );
}

export default Login;
