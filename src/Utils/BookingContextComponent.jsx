import React, { useEffect, useState } from "react";
import AxiosService from "../Routes/AxiosService";
import ApiRoutes from "../Routes/AxiosRoutes";
import { useParams } from "react-router-dom";
export const BookContext = React.createContext();

function BookingContextComponent({ children}) {
  let [movie, setMovie] = useState(null);
  const {_id} = useParams()

  const getData = async () => {
    try {
      const res = await AxiosService.get(`/user/movie/${_id}`);
      if (res.status === 200) {
        console.log(res.data.movie);
        setMovie(res.data.movie);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <BookContext.Provider value={{ movie, setMovie }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookingContextComponent;
