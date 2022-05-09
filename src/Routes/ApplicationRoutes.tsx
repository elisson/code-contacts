import { Routes, Route } from "react-router-dom";
import DefaultContainer from "../containers/DefaultContainer";
import MainPage from "../pages/MainPage";
import PersonPage from "../pages/PersonPage";

export default function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultContainer />}>
        <Route index element={<MainPage />} />
        <Route path="contacts" element={<PersonPage />}>
          <Route index element={<PersonPage />} />
          <Route path=":id" element={<PersonPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
