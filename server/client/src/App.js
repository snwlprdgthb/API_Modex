import "./styles/globals.css";
import GetUsers from "./pages/GetUsers";
import CreateUser from "./pages/CreateUser";
import GetUserByID from "./pages/GetUserByID";
import UpdateUserByID from "./pages/UpdateUserByID";
import DeleteUserByID from "./pages/DeleteUserByID";
import MainPage from "./pages/MainPage";

import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./utils/Header";
// import { Route, Routes } from "react-router-dom";

const WrapperWithClientHeader = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <WrapperWithClientHeader>
              <MainPage />
            </WrapperWithClientHeader>
          }
        />

        <Route
          exact
          path="/getUsers"
          element={
            <WrapperWithClientHeader>
              <GetUsers />
            </WrapperWithClientHeader>
          }
        />

        <Route
          exact
          path="/createUser"
          element={
            <WrapperWithClientHeader>
              <CreateUser />
            </WrapperWithClientHeader>
          }
        />

        <Route
          exact
          path="/getUserByID"
          element={
            <WrapperWithClientHeader>
              <GetUserByID />
            </WrapperWithClientHeader>
          }
        />

        <Route
          exact
          path="/updateUserByID"
          element={
            <WrapperWithClientHeader>
              <UpdateUserByID />
            </WrapperWithClientHeader>
          }
        />

        <Route
          exact
          path="/deleteUserByID"
          element={
            <WrapperWithClientHeader>
              <DeleteUserByID />
            </WrapperWithClientHeader>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
