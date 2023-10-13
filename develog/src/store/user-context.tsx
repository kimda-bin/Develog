import { createContext, useState } from "react";

const UserContext = createContext<any>({
  isLogin: false,
  setIsLogin: () => {},
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  return (
    <UserContext.Provider
      value={{ isLogin, setIsLogin, isOpenDropdown, setIsOpenDropdown }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
