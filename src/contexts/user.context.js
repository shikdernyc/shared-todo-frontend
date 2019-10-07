import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();
export const UserActionContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);

  const logout = async () => {
    await setUserData(null)
  }

  const setUserData = async (userData) => {
    await setUserData(userData)
  }

  return (
    <UserContext.Provider value={{ userData }}>
      <UserActionContext.Provider value={{ setUserData, logout }}>
        {children}
      </UserActionContext.Provider>
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.element.isRequired
};
