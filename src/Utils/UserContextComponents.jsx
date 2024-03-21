import React, { useEffect, useState } from "react";
import AxiosService from "../Routes/AxiosService";
import ApiRoutes from "../Routes/AxiosRoutes";
export const UserContext = React.createContext();

function UserContextComponents({ children }) {
  let [user, setUser] = useState();

  const getData = async () => {
    try {
        let _id = sessionStorage.getItem("userId");

      const res = await AxiosService.get(`${ApiRoutes.GET_USER.path}/${_id}`,{
        authenticate: ApiRoutes.GET_USER.authenticate,
      });
      if (res.status === 200) {
        console.log(res.data.user)
        setUser(res.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children} 
    </UserContext.Provider>
  );
}

export default UserContextComponents;
