import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Join from "../pages/Join";
import Write from "../pages/Write";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
