import { Routes, Route } from "react-router-dom";
import DefaultContainer from "../containers/DefaultContainer";
import MainPage from "../pages/MainPage";

export default function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultContainer />} >
      <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
}
