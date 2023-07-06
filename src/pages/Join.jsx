import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { join } from "../redux/modules/userSlice";

function Join() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confPassword, setConfPassword] = useState();
  const [name, setName] = useState();
  return (
    <div>
      <h4>Join 페이지입니다.</h4>
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
        placeholder="비밀번호을 입력해주세요."
      />
      <input
        value={confPassword}
        onChange={(e) => {
          setConfPassword(e.target.value);
        }}
        placeholder="확인 비밀번호을 입력해주세요."
      />
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="이름을 입력해주세요."
      />
      <button
        onClick={() => {
          if (password !== confPassword) {
            alert("비밀번호가 다릅니다. 확인해주세요!");
            return false;
          }

          dispatch(
            join({
              email,
              password,
              name,
            })
          );
          alert("회원가입 완료");
          navigate("/");
        }}
      >
        회원가입
      </button>
    </div>
  );
}

export default Join;
