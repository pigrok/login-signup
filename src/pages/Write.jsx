import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addPost } from "../redux/modules/boardSlice";

function Write() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const location = useLocation();
  console.log(location.state.userId);

  const writerId = location.state.userId;

  const handleWriteButtonHandler = (e) => {
    e.preventDefault();
    // (1) dispatch
    dispatch(addPost({ title, contents, writerId }));
    // (2) 페이지 이동
    navigate("/");
  };
  console.log(title);

  console.log(contents);

  return (
    <div>
      <h1>글 작성 페이지입니다.</h1>
      <form onSubmit={handleWriteButtonHandler}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="글 제목을 입력해주세요." />
        <br />
        <input value={contents} onChange={(e) => setContents(e.target.value)} placeholder="글 내용을 입력해주세요." />
        <button type="submit">작성</button>
      </form>
    </div>
  );
}

export default Write;
