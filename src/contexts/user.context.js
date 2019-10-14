import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();
export const UserActionContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);

  const logout = async () => {
    await setUserData(null)
  }

  const updateUserData = async (userData) => {
    await setUserData(userData)
  }

  const isAuthenticated = () => {
    return userData !== null
  }

  return (
    <UserContext.Provider value={{ userData, isAuthenticated }}>
      <UserActionContext.Provider value={{ updateUserData, logout }}>
        {children}
      </UserActionContext.Provider>
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default UserContext