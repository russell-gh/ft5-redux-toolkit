import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { storeApiData } from "./features/todos/todosSlice";
import Interface from "./components/Interface";

function App() {
  const dispatch = useDispatch();

  const getApiData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    data.length = 10;
    dispatch(storeApiData(data));
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <Interface />
    </>
  );
}

export default App;
