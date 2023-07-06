import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/modules/userSlice";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const boardList = useSelector((state) => {
    return state.boardSlice;
  });

  console.log(boardList);

  const userList = useSelector((state) => {
    return state.userSlice;
  });

  const loginUser = userList.find((user) => user.isLogin === true);

  console.log("userList", userList);
  console.log("loginUser", loginUser);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            login
          </button>
          <button
            onClick={() => {
              navigate("/join");
            }}
          >
            sign up
          </button>
          <button
            onClick={() => {
              if (loginUser) {
                navigate("/write", {
                  state: { userId: loginUser.id },
                });
              } else {
                alert("로그인이 필요합니다");
                // 함수를 종료해야하므로
                return false;
              }
            }}
          >
            write
          </button>
        </div>
        {loginUser && (
          <div>
            {loginUser.userName}님 반갑습니다!
            <button
              onClick={() => {
                const isConfirmed = "진짜 로그아웃???";
                if (isConfirmed) {
                  // action.payload를 객체로 보냈다면
                  //   dispatch(logout(loginUser.id));
                  dispatch(logout(loginUser.id));
                }
              }}
            >
              logout
            </button>
          </div>
        )}
      </div>
      <div style={{ backgroundColor: "#dba6fa", padding: "5px", margin: "5px", border: "1px solid black" }}>
        {boardList
          .filter((board) => board.isDeleted === false)
          .map((board) => {
            return (
              <div key={board.id}>
                {board.title}
                {board.contents}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Main;
