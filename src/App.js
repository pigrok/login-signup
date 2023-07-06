import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Router from "./shared/Router";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.userSlice;
  });

  const board = useSelector((state) => {
    return state.boardSlice;
  });

  return <Router />;
}

export default App;
