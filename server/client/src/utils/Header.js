import React from "react";

// import { Route, Routes } from "react-router-dom";

// const WrapperWithClientHeader = ({ children }) => {
//   return (
//     <>
//       <Header />
//       <div id="outer-container">
//         <SidebarComponent />
//         <main id="page-wrap">{children}</main>
//       </div>
//     </>
//   );
// };

function Header() {
  const redirectTo = (link) => {
    console.log(process.env.REACT_APP_FRONTEND_URI);
    window.location.replace(`${process.env.REACT_APP_FRONTEND_URI}${link}`);
  };

  return (
    <header className="bg-gray-700 text-gray-200 p-4 shadow-md">
      <nav className="flex justify-between items-center container mx-auto">
        <div className="text-xl font-semibold">
          <a href="/" className="hover:text-gray-400">
            User Management
          </a>
        </div>
        <ul className="flex space-x-6">
          <li
            onClick={() => redirectTo("/getUsers")}
            className="hover:text-gray-400"
          >
            Get users
          </li>
          <li
            onClick={() => redirectTo("/createUser")}
            className="hover:text-gray-400"
          >
            Create User
          </li>
          <li
            onClick={() => redirectTo("/getUserByID")}
            className="hover:text-gray-400"
          >
            Get User(ID)
          </li>
          <li
            onClick={() => redirectTo("/updateUserByID")}
            className="hover:text-gray-400"
          >
            Update User(ID)
          </li>
          <li
            onClick={() => redirectTo("/deleteUserByID")}
            className="hover:text-gray-400"
          >
            Delete User(ID)
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
